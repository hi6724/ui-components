import AccordionReact from './1_r';
import AccordionJs from './2_js';
import cx from './cx';

const Accordion = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>#1 react</h2>
      <AccordionReact />
      <h2>#2 javascript</h2>
      <AccordionJs />
    </div>
  );
};

export default Accordion;
