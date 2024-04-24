// sHeader.js

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivMirko = styled.div`
  /* Estilos para el contenedor del menú */
`;

export const NavMenu = styled.nav`
  padding: 2rem;
  background-color: #fff;
  width: calc(130px + 4 * 70px + 4rem);
  display: flex;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.075);
`;

export const NavItem = styled(Link)`
  text-decoration: none;
  color: #333;
  margin-right: 1rem;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Añadimos un nuevo estilo para aplicar al elemento al que se le está pasando el cursor
export const NavItemWrapper = styled.span`
  &:hover ${NavItem} {
    transform: scale(1.05);
  }
`;
