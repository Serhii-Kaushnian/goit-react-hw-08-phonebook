import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Register from 'pages/Register/Register';
import UserData from 'components/UserData/UserData';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';
import {
  NavList,
  NavListItem,
  CustomLink,
  Header,
} from './SharedLayout.styled';

export default function SharedLayout() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return (
    <div>
      <Header>
        <nav>
          <NavList>
            <NavListItem>
              <CustomLink to="/">Home</CustomLink>
            </NavListItem>
            <NavListItem>
              <CustomLink to="/contacts">My Phone Book</CustomLink>
            </NavListItem>
          </NavList>
        </nav>
        {isLoggedIn ? <UserData /> : <Register />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
