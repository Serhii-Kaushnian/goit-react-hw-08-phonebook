import React from 'react';
import { CustomLink } from './Register.styled';
export default function Register() {
  return (
    <div>
      <CustomLink to="/signup">Sign Up</CustomLink>
      <CustomLink to="/Login">Login</CustomLink>
    </div>
  );
}
