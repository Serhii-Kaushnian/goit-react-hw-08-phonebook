import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const CustomLink = styled(NavLink)`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: #cbcbc8;
  padding: 10px;
  min-width: 90px;
  color: black;
  font-weight: 800;
  font-size: 20px;
  border-radius: 10px;
  transition: background-color 250ms ease;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover,
  &:focus {
    background-color: #adadad;
  }
  &.active {
    background-color: #868686;
  }
`;
