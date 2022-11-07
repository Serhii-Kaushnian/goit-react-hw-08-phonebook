import React from 'react';
import { Status, UserName, Button, UserDataWrapper } from './UserData.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserName, selectorIsLoggedIn } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';

export default function UserData() {
  const name = useSelector(selectorUserName);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <UserDataWrapper>
      <Status style={{ backgroundColor: isLoggedIn ? 'green' : 'red' }} />
      <UserName>{name}</UserName>
      <Button onClick={logOutHandler}>Logout</Button>
    </UserDataWrapper>
  );
}
