import styled from '@emotion/styled';
export const UserDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Status = styled.div`
  min-width: 15px;
  min-height: 15px;
  border-radius: 50%;
  background-color: red;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const UserName = styled.p`
  font-size: 20px;
  font-weight: 800;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export const Button = styled.button`
  display: inline-block;

  text-align: center;
  text-decoration: none;
  background-color: #cbcbc8;

  height: 43px;
  color: black;
  font-weight: 800;
  border: none;
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
`;
