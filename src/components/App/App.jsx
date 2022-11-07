import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from 'components/routes/PrivateRoute';
import PublicRoute from 'components/routes/PublicRoute';
import Loader from 'components/Loader/Loader';

const Contacts = lazy(() => import('components/Contacts/Contacts'));
const Home = lazy(() => import('components/Home/Home'));
const Login = lazy(() => import('components/Login/Login'));
const SharedLayout = lazy(() => import('components/SharedLayout/SharedLayout'));
const SignUp = lazy(() => import('components/SignUp/SignUp'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route element={<PublicRoute />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<Contacts />} />
            </Route>

            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
