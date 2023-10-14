import React from 'react';

export default function Label_And_Name({
  label,
  name,
  textColor = 'text-black',
  underline = false, // boolean
}) {
  return (
    <div className='flex flex-col gap-y-0 md:gap-y-1.5'>
      <span className={`text-sm md:text-base ${textColor}`}>{label}</span>
      <span className='text-xs md:text-sm text-text-gray'>{name}</span>
    </div>
  );
}
