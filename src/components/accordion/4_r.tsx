import { useEffect, useRef, useState } from 'react';
import cx from './cx';
import data from './data';

const AccordionItem = ({
  id,
  title,
  description,
  current,
  toggle,
}: {
  id: number;
  title: string;
  description: string;
  current: boolean;
  toggle: () => void;
}) => {
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!descRef.current) return;
    descRef.current.addEventListener('beforematch', toggle);
    return () => descRef.current?.removeEventListener('beforematch', toggle);
  }, [toggle]);

  return (
    <li className={cx('item', 'item3', { current })} key={id}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      <div className={cx('description')} ref={descRef} HIDDEN={current || 'until-found'}>
        {description}
      </div>
    </li>
  );
};

const AccordionUntilFound = () => {
  const [currentId, setCurrentId] = useState<number | null>(data[0].id);
  const toggleItem = (id: number) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <ul className={cx('container')}>
        {data.map((d, i) => (
          <AccordionItem {...d} key={d.id} current={currentId === d.id} toggle={toggleItem(d.id)} />
        ))}
      </ul>
    </>
  );
};

export default AccordionUntilFound;

/* 참고: https://hiddenest.dev/accessible-accordion */
