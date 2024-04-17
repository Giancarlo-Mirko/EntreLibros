import { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/loader/Loader';
import { Wrapper2 } from './theme/generalStyles/generalStyles';

const SignIn = () => {
  const [loader, setLoader] = useState(false);
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

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
    if (user != null) {
      navigate('/home');
    }
  }, [user]);

  return (
    <>
      {/* <Loader /> */}
      {loader && <Loader />}
      <Wrapper2>
        <h1>Sign in</h1>
        <div>
          <button onClick={handleGoogleSignIn}> google buton</button>
        </div>
      </Wrapper2>
    </>
  );
};

export default SignIn;
