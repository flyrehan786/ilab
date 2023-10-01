
import React from 'react';
const Login = React.lazy(() => import('src/Pages/Login/Login.jsx'));
const Signin = React.lazy(() => import('src/Pages/Signin/Signin.jsx'));
const Home = React.lazy(() => import('src/Pages/Home/Home.jsx'));


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
