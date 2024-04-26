import { UserAuth } from '../../context/AuthContextProvider';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { DivMirko, NavMenu, ButtonSalir } from './sHeader';
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
      <DivMirko>
        <Wrapper2>
          <NavMenu>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/libros">Libros</NavLink>
              </li>
              <li>
                <Link to="/perfil">Perfil</Link>
              </li>
              <li>
                <ButtonSalir onClick={handleLogOuth}>Salir</ButtonSalir>
              </li>
            </ul>
          </NavMenu>
        </Wrapper2>
      </DivMirko>
    </>
  );
};

export default Header;
