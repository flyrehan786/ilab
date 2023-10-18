import React, { useState } from 'react';
import { MenuFoldOutlined, UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu, Image } from 'antd';

import { Link } from 'react-router-dom';
import LogoutIcon from '../assets/icon/LogoutIcon';
import Logo from '../assets/images/alsn_logo.png';
import Header from '../Components/Common/Header';
import ManageUserIcon from '../assets/svgs/manage_user.svg?react';
import DashboardIcon from '../assets/svgs/dashboard.svg?react';
import TestIcon from '../assets/svgs/test.svg?react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem(<Link to={'/'}>Dashboard</Link>, '1', <DashboardIcon />),
  getItem(<Link to={'/patients'}>Manage Patients</Link>, '2', <UserOutlined />),
  getItem(<Link to={'/doctors'}>Manage Doctors</Link>, '3', <UserOutlined />),
  getItem(<Link to={'/tests'}>Manage Test</Link>, '4', <TestIcon />),
  getItem(<Link to={'/users'}>Manage Patient Tests</Link>, '5', <ManageUserIcon />),
  getItem(<Link to={'/users'}>Manage Patient Tests Results</Link>, '6', <ManageUserIcon />),
  getItem(<Link to={'/users'}>Patient Tests Reports</Link>, '7', <ManageUserIcon />),
  getItem(<Link to={'/users'}>Statistics</Link>, '9', <ManageUserIcon />),
  getItem(<Link to={'/users'}>Manage Users</Link>, '7', <ManageUserIcon />),
  getItem(<Link to={'/users'}>Account Settings</Link>, '8', <ManageUserIcon />),
];

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // console.log(collapsed)
  const onClick = (e) => {
    console.log('click ', e);
  };

  return (
    <div className='flex flex-row relative'>
      <div
        className={`grid grid-rows-[15%_75%_10%]  fixed justify-center transition-all duration-500 h-screen shadow-boxShadow ${
          collapsed ? 'w-[85px]' : 'w-[254px]'
        } portal-sidebar font-cairo`}>
        {collapsed ? (
          <div className='custom-transition flex items-center p-3 mt-5'>
            <Image preview={false} src={Logo} alt='' />
          </div>
        ) : (
          <div className='custom-transition flex items-center  p-14 my-2'>
            <Image preview={false} src={Logo} alt='' />
          </div>
        )}
        <Menu
          className='text-base font-cairo'
          onClick={onClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          inlineCollapsed={collapsed}
          items={items}
        />

        {/* ---------------Collapsing Here--------------- */}
        <div className='absolute bg-theme-color rounded-sm -right-4 top-2'>
          <Button
            onClick={toggleCollapsed}
            className='border-none'
            icon={collapsed ? <MenuUnfoldOutlined style={{ color: '#fff' }} /> : <MenuFoldOutlined style={{ color: '#fff' }} />}
          />
        </div>
        {/* ---------------Logout Here--------------- */}
        <div className='logout-btn h-full flex items-start justify-center mb-10'>
          <Button className='seconday-btn px-12 py-5 font-bold' icon={<LogoutIcon />}>
            {collapsed ? '' : 'Logout'}
          </Button>
        </div>
      </div>
      <div className={`custom-transition flex flex-col w-full bg-extra-Light-gray  ${collapsed ? 'ml-[81px]' : 'ml-[254px]'}`}>
        <Header />
        <section className={'page-content px-10 bg-[#F7F7F7]'}>{children}</section>
      </div>
    </div>
  );
};
export default MainLayout;
