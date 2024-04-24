import React from 'react';
import { UserAuth } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { DivMirko, NavMenu, NavItem, NavItemWrapper } from './sHeader';
import { Wrapper2 } from '../../pages/theme/generalStyles/generalStyles';

const Header = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOuth = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Wrapper2>
        <DivMirko>
          <NavMenu>
            <NavItemWrapper>
              <NavItem to="/">Home</NavItem>
            </NavItemWrapper>
            <NavItemWrapper>
              <NavItem to="/libros">Libros</NavItem>
            </NavItemWrapper>
            <NavItemWrapper>
              <NavItem to="/perfil">Perfil</NavItem>
            </NavItemWrapper>
            <button onClick={handleLogOuth}>Salir</button>
          </NavMenu>
        </DivMirko>
      </Wrapper2>
    </>
  );
};

export default Header;
