import React from 'react';
const Login = React.lazy(() => import('../Pages/Login/Login'));
const SignUp = React.lazy(() => import('../Pages/SignUp/SignUp'));
const Home = React.lazy(() => import('../Pages/Home/Home'));
const Patients = React.lazy(() => import('../Pages/Patients/Patients'));
const Patients_Details = React.lazy(() => import('../Pages/Patients/Patient_Details'));
const Add_and_Edit_Patient = React.lazy(() => import('../Pages/Patients/Add_and_Edit_Patients'));

export const all_routes = [
  // ============== Auth =================
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
    element: <SignUp />,
  },
  // ============== Home =================
  {
    key: 'home',
    path: '/',
    isPrivate: true,
    element: <Home />,
  },
  // ============== Patients Routes =================
  {
    key: 'patients',
    path: '/patients',
    isPrivate: true,
    element: <Patients />,
  },
  {
    key: 'patients-details',
    path: '/patients/:id',
    isPrivate: true,
    element: <Patients_Details />,
  },
  {
    key: 'add-patient',
    path: '/patients/add-patient',
    isPrivate: true,
    element: <Add_and_Edit_Patient />,
  },
  {
    key: 'edit-patient',
    path: '/patients/edit-patient/:id',
    isPrivate: true,
    element: <Add_and_Edit_Patient />,
  },
];
