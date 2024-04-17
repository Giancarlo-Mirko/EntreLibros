import { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Wrapper2 } from './theme/generalStyles/generalStyles';
import { AppContext } from '../App';
import Loader from '../components/loader/Loader';

const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const { currentUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoader(true);
      await googleSignIn();
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (currentUser != null) {
      navigate('/home');
    }
  }, [currentUser]);

  return (
    <>
      {loader && <Loader />}
      <Wrapper2>
        <h1>Sign in</h1>
        <div>
          <button onClick={handleGoogleSignIn}>Google Button</button>
        </div>
      </Wrapper2>
    </>
  );
};

export default SignIn;
