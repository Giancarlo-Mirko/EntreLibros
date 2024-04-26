import Header from '../../components/header/Header';
import { Wrapper2 } from '../theme/generalStyles/generalStyles';
import { AppContext } from '../../App';
import { useContext } from 'react';

const Profile = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <>
      <Header />
      <Wrapper2>
        <h2> Hola</h2>
        <h3>{currentUser.displayName}</h3>

        <div>Profile</div>
      </Wrapper2>
    </>
  );
};

export default Profile;
