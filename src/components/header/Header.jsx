import { UserAuth } from '../../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
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
      <div>Header</div>
      <button onClick={handleLogOuth}>salir</button>
    </>
  );
};

export default Header;
