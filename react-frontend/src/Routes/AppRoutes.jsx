import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from './routes';

const AppRoutes = () => {
  //================================
  // Token Login Here
  //================================
  const token = true;

  //=========================================
  // Check the route if private & don't
  // have token the navigate to './login'
  //========================================
  const renderRoute = (route, token) => {
    if (route.isPrivate && !token) {
      return <Navigate to={'/login'} replace />;
    }
    return route.element;
  };

  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.key} path={route.path} element={renderRoute(route, token)} />
      ))}
    </Routes>
  );
};

export default AppRoutes;