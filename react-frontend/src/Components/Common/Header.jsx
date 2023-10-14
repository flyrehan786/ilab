import React from 'react';
import { Input } from 'antd';
import Bell from '../../assets/icon/Bell';

const { Search } = Input;

const Header = () => {
  return (
    <header className='flex items-center h-[80px] px-[34px] py-[16px]'>
      <div className='flex items-center justify-between w-full'>
        <Search placeholder='Search here' className='remove-border !w-[60%]' size='large' />
        <div className='flex items-center gap-x-6'>
          <div className='cursor-pointer'>
            <Bell />
          </div>
          <div className='flex flex-col'>
            <span className='text-[15px] font-bold'>Welcome</span>
            <span className='text-[13px] text-theme-color font-normal -mt-1'>Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
