import styled from "styled-components";
import { Link } from "react-router-dom";

export const CharactersListStyled = styled.ul`
  display: grid;
  gap: 32px;
  margin-top: 32px;
`;

export const ItemStyled = styled.li`
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12),
    0px 2px 4px rgba(0, 0, 0, 0.14);
  border-radius: 4px;
`;

export const ImgStyled = styled.img`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const CardContentWrapp = styled.div`
  display: grid;
  gap: 1px;
  padding: 12px 16px;
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;

export const Race = styled.p`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(0, 0, 0, 0.6);
`;
