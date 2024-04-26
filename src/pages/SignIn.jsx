import { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Wrapper2 } from './theme/generalStyles/generalStyles';
import { AppContext } from '../App';
import Loader from '../components/loader/Loader';

import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

import { query, where } from 'firebase/firestore';
import { Content } from './styles/sSignIn';

const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const { currentUser } = useContext(AppContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const handleUpData = async () => {
    try {
      await setDoc(doc(db, 'users', currentUser.uid), {
        nombre: currentUser.displayName,
        email: currentUser.email,
        uid: currentUser.uid,
      });
      console.log('Usuario registrado en Firestore DB');
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

  useEffect(() => {
    const fetchData = async () => {
      console.log('este es el currenUser', currentUser);
      if (currentUser != null) {
        const citiesRef = collection(db, 'users');
        const q = query(citiesRef, where('uid', '==', currentUser.uid));
        const querySnapshot = await getDocs(q); // Ejecutar la consulta para obtener un snapshot

        if (!querySnapshot.empty) {
          // Verificar si el snapshot contiene documentos
          await handleUpData();
          console.log('Usuario registrado en Firestore DB');
        } else {
          console.log('No se encontraron registros para el usuario');
        }

        navigate('/home');
      }
    };
    fetchData();
  }, [currentUser, navigate]);

  return (
    <>
      {loader && <Loader />}
      <Wrapper2>
        <Content>
          <h1>Sign in</h1>
          <div>
            <button onClick={handleGoogleSignIn}>Google Button</button>
          </div>
        </Content>
      </Wrapper2>
    </>
  );
};

export default SignIn;
