import { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Wrapper2 } from './theme/generalStyles/generalStyles';
import { AppContext } from '../App';
import Loader from '../components/loader/Loader';

import { addDoc, collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const { currentUser, usersUid, setUsersUid } = useContext(AppContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleUpData = async () => {
    try {
      await setDoc(doc(db, 'users', `${currentUser.uid}`), {
        nombre: currentUser.displayName,
        email: currentUser.email,
        uid: currentUser.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoader(true);
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (currentUser != null) {
  //     navigate('/home');
  //   }
  // }, [currentUser]);

  useEffect(() => {
    const fetchData = async () => {
      if (currentUser != null) {
        // const isUserRegistered = usersUid.includes(currentUser.uid);
        // console.log('¿El usuario está registrado?', isUserRegistered);
        // if (!isUserRegistered) {
        //   console.log('Crea nuevo usuario en firestore DB');
        // }
        await handleUpData();
        navigate('/home');
      }
    };
    fetchData();
  }, [currentUser, navigate]);

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
