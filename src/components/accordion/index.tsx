import AccordionReact from './1_r';
import AccordionJs from './2_js';
import AccordionHtml from './3_html';
import AccordionUntilFound from './4_r';
import cx from './cx';

const Accordion = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>#1 react</h2>
      <AccordionReact />
      <h2>#2 javascript</h2>
      <AccordionJs />
      <h2>#3 html input radio로 처리</h2>
      <AccordionHtml />
      <h2>#4 until-found를 사용한 숨김처리</h2>
      <AccordionUntilFound />
    </div>
  );
};

export default Accordion;
