import Contacts from 'components/Contacts/Contacts';
import Home from 'components/Home/Home';
import Login from 'components/Login/Login';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import SignUp from 'components/SignUp/SignUp';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
