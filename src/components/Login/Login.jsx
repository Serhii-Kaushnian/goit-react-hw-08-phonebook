import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, Form, Label, Title, Input, Button } from './Login.styled';
import authOperations from 'redux/auth/authOperations';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>
        <Label>
          Password
          <Input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
          />
        </Label>
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  );
}
