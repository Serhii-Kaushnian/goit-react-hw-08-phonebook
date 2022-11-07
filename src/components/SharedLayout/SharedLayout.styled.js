import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;
export const NavListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
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
  &:hover,
  &:focus {
    background-color: #adadad;
  }
  &.active {
    background-color: #868686;
  }
`;
export const Header = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
`;
