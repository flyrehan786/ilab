import React from 'react';

export default function Header_titleAndDesc({ title, desc }) {
  return (
    <header className='p-5 border-b border-border-gray'>
      <h1 className='primary-heading text-xl'>{title}</h1>
      <span className='primary-span'>{desc}</span>
    </header>
  );
}
