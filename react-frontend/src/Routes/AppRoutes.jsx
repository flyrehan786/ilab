import { Routes, Route, Navigate } from 'react-router-dom';
import { all_routes } from './routes';
import { Suspense } from 'react';
import { Spin } from 'antd';
import MainLayout from '../Layout/MainLayout';

const AppRoutes = () => {
  //================================
  // Token Login Here
  //================================
  const token = JSON.parse(localStorage.getItem('token'));
  console.log(token);

  //=========================================
  // Check the route if private & don't
  // have token the navigate to './login'
  //========================================
  const renderRoute = (route, token) => {
    if (route.isPrivate && !token?.jwtToken) {
      return <Navigate to={'/login'} replace />;
    }
    return route.element;
  };

  return (
    <Suspense fallback={<Spin size='large' style={{ position: 'absolute', marginTop: 'auto' }} />}>
      <Routes>
        {all_routes.map((route) => (
          <>
            {!token ? (
              <Route key={route.key} path={route.path} element={renderRoute(route, token)} />
            ) : (
              <Route key={route.key} path={route.path} element={<MainLayout>{renderRoute(route, token)}</MainLayout>} />
            )}
          </>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
