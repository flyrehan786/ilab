import React from 'react';
const Login = React.lazy(() => import('../Pages/Login/Login'));
const Signin = React.lazy(() => import('../Pages/Signin/Signin'));
const Home = React.lazy(() => import('../Pages/Home/Home'));

export const routes = [
  {
    key: 'login',
    path: '/login',
    isPrivate: false,
    element: <Login />,
  },
  {
    key: 'signin',
    path: '/signin',
    isPrivate: false,
    element: <Signin />,
  },
  {
    key: 'home',
    path: '/',
    isPrivate: true,
    element: <Home />,
  },
];
