import React from 'react';
import { Status, UserName, Button, UserDataWrapper } from './UserData.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectorUserName } from 'redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';

export default function UserData() {
  const name = useSelector(selectorUserName);

  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authOperations.logOut());
  };
  return (
    <UserDataWrapper>
      <Status />
      <UserName>{name}</UserName>
      <Button onClick={logOutHandler}>Logout</Button>
    </UserDataWrapper>
  );
}
