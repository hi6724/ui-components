import React, { useState } from 'react';
import data from './data';
import cx from './cx';
import VanillaWrapper from '../vanillaWrapper';

function itemBuilder({ id, title, description }: { id: number; title: string; description: string }) {
  const $li = document.createElement('li');
  $li.classList.add(cx('item'), cx('item3'));
  $li.setAttribute('data-id', id.toString());

  const $tab = document.createElement('div');
  $tab.classList.add(cx('tab'));
  $tab.textContent = title;

  const $description = document.createElement('div');
  $description.classList.add(cx('description'));
  $description.textContent = description;

  $li.append($tab, $description);
  return $li;
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: number | null = null;
  const $ul = document.createElement('ul');
  $ul.classList.add(cx('container'));

  const $items = data.map(itemBuilder);
  $ul.append(...$items);

  function toggleItem(e: Event) {
    const $el = e.target as HTMLElement;
    if (!$el.classList.contains(cx('tab'))) return;
    const targetId = $el.closest('li')?.getAttribute('data-id');
    currentId = currentId === Number(targetId) ? null : Number(targetId);
    $items.forEach(($item) => {
      const id = $item.getAttribute('data-id');
      $item.classList.toggle(cx('current'), Number(id) === currentId);
    });
  }
  $ul.addEventListener('click', toggleItem);
  wrapper.append($ul);
};
const AccordionJs = () => <VanillaWrapper initiator={initiator}></VanillaWrapper>;

export default AccordionJs;
