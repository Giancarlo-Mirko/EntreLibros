import styled from 'styled-components';

export const DivMirko = styled.div`
  background-color: #fff;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.075);

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
  }
  ul li {
    padding: 5px 10px;
  }

  .active {
    border-bottom: 1px solid;
  }
`;

export const NavMenu = styled.nav`
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ButtonSalir = styled.button`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  border: 2px solid black;
  cursor: pointer;
  transition: 0.25s all ease-in-out;
  &:hover {
    background-color: #010812;
    color: #fff;
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
    background-color: #fff;
    color: black;
  }
`;
