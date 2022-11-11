import React from 'react';
import { HomeWrapper } from './Home.styled';
import { Navigate, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  if (location.pathname !== '/') {
    return <Navigate to="/" replace={true} />;
  } else {
    return <HomeWrapper />;
  }
}
