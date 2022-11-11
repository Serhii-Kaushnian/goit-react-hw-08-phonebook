import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Button, Input, Label, Wrapper, Form } from './SignUp.styled';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await dispatch(
      authOperations.register({ name, email, password })
    );

    if (
      response.payload.message === undefined &&
      response.payload.status === 400
    ) {
      Notify.failure(
        'It seems that you have already registered with this e-Mail'
      );
    } else if (response.payload.message) {
      Notify.failure('Password must be at least of 7 signs');
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name
          <Input type="name" name="name" value={name} onChange={handleChange} />
        </Label>
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
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>
        <Button type="submit">login</Button>
      </Form>
    </Wrapper>
  );
}
