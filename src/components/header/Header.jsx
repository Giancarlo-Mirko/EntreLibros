import { UserAuth } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { DivMirko } from './sHeader';
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
          <div>Header</div>
          <button onClick={handleLogOuth}>salir</button>
        </DivMirko>
      </Wrapper2>
    </>
  );
};

export default Header;
