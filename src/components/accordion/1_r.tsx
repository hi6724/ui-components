import React, { useState } from 'react';
import data from './data';
import cx from './cx';

function AccordionItem({
  id,
  title,
  description,
  currentId,
  toggleItem,
}: {
  id: number;
  title: string;
  description: string;
  currentId: number | null;
  toggleItem: () => void;
}) {
  return (
    <li className={cx('item')}>
      <div className={cx('tab')} onClick={toggleItem}>
        {title}
      </div>
      {currentId === id && <div className={cx('description')}>{description}</div>}{' '}
    </li>
  );
}

function AccordionReact() {
  const [currentId, setCurrentId] = useState<number | null>(null);
  const toggleItem = (id: number) => () => {
    setCurrentId(currentId === id ? null : id);
  };
  return (
    <>
      <ul className={cx('container')}>
        {data.map((item) => (
          <AccordionItem key={item.id} {...item} currentId={currentId} toggleItem={toggleItem(item.id)} />
        ))}
      </ul>
    </>
  );
}

export default AccordionReact;
