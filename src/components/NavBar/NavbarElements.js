import styled from 'styled-components';

export const Nav = styled.nav`
  background: #ffc500;
  height: 50px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled.div`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
