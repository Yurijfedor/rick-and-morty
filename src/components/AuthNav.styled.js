import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthNavWrapp = styled.div`
  display: grid;
  gap: 10px;
  margin-left: auto;
`;

export const AuthButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: gray;
  &:hover {
    background-color: #29d1c3;
    color: white;
  }
  @media (min-width: 768px) {
    width: 150px;
    margin-left: auto;
  }
`;
