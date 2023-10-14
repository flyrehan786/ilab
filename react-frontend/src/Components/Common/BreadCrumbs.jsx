import React from 'react';
import { Breadcrumb } from 'antd';

export const BreadCrumbs = ({ items = [] }) => {
  const itemsToHighlight = items.length === 3 ? 2 : 1;

  return (
    <Breadcrumb separator='/'>
      {items.map((el, index) => (
        <Breadcrumb.Item key={index} className={index < itemsToHighlight ? 'text-theme-color text-base font-bold' : 'text-gray'}>
          {el}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
