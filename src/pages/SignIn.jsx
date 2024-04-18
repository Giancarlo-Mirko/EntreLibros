import { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Wrapper2 } from './theme/generalStyles/generalStyles';
import { AppContext } from '../App';
import Loader from '../components/loader/Loader';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/firebase';

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
    }
  };

  const handleUpData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        nombre: currentUser.displayName || 'Nombre no disponible',
        email: currentUser.email || 'Email no disponible',
        uid: currentUser.uid,
      });

      console.log('Documento escrito con ID:', docRef.id);
    } catch (e) {
      console.error('Error al agregar documento:', e);
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
