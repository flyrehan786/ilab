import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, Input } from 'antd';
const { Search } = Input;

const { Sider } = Layout;
// import { ReactComponent as Home } from '@assets/svgs/home.svg'
// import { ReactComponent as Search } from '@assets/svgs/search.svg'
// import { ReactComponent as Notifiaction } from '@assets/svgs/notifications.svg'
// import { ReactComponent as MarketPlace } from '@assets/svgs/market-place.svg'
// import { ReactComponent as Messages } from '@assets/svgs/messages.svg'
// import { ReactComponent as CreatePost } from '@assets/svgs/create-post.svg'
// import { ReactComponent as Profile } from '@assets/svgs/profile.svg'
// import { ReactComponent as Hamberger } from '@assets/svgs/hamberger.svg'
// import Logo from '@assets/svgs/black-logo.svg';
// import CommonBtn from '@components/common/CommonBtn';
import { Link } from 'react-router-dom';

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
  getItem(<Link to={'/home'}>Home</Link>, '1', <UserOutlined />),
  getItem(<Link to={'/search'}>Search</Link>, '2', <UserOutlined />),
  getItem(<Link to={'/market-place'}>Market Place</Link>, '3', <UserOutlined />),
  getItem(<Link to={'/notifications'}>Notifications</Link>, '4', <UserOutlined />),
  getItem(<Link to={'/messages'}>Messages</Link>, '5', <UserOutlined />),
  getItem(<Link to={'/create-post'}>Create Post</Link>, '6', <UserOutlined />),
  getItem(<Link to={'/my-profile'}>My Profile</Link>, '7', <UserOutlined />),
];

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    // console.log("first")/
  };

  // console.log(collapsed)
  const onClick = (e) => {
    console.log('click ', e);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className='flex flex-row relative'>
      <div
        className={`flex flex-col fixed transition-all duration-500 h-screen !border-r ${
          collapsed ? 'w-[81px]' : 'w-[254px]'
        } portal-sidebar font-cairoRegular`}>
        {collapsed ? (
          <div className='flex items-center h-24'>small logo</div>
        ) : (
          <div className='flex items-center h-24'>
            {/* <img src={Logo} alt='' /> */}
            logo
          </div>
        )}
        <Menu
          className=''
          onClick={onClick}
          // style={{
          //     width: 264,
          //     height: '100vh'
          // }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          inlineCollapsed={collapsed}
          items={items}
        />

        <div className='absolute bg-red-600 -right-4 top-7'>
          <Button onClick={toggleCollapsed} className='border-none' icon={<UserOutlined />} />
        </div>
      </div>
      <div className={`flex flex-col transition-all duration-500 ${collapsed ? 'ml-[81px]' : 'ml-[254px]'}`}>
        {/* <PortalHeader /> */}
        <div className='flex items-center bg-pink-200 py-8 px-5'>
          <Search className='' placeholder='input search text' onSearch={onSearch} enterButton />
        </div>
        <section className={'px-5'}>{children}</section>
      </div>
    </div>
  );
};
export default MainLayout;
