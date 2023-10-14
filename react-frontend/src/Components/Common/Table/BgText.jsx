import React from 'react';

export default function BgText({ text, className }) {
  return <span className={`${className} cursor-pointer bg-light-gray px-4 py-1 rounded-md`}>{text}</span>;
}
