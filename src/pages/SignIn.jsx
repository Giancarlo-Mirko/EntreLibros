import { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Wrapper2 } from './theme/generalStyles/generalStyles';
import { AppContext } from '../App';
import Loader from '../components/loader/Loader';

import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

import { query, where } from 'firebase/firestore';
import {
  ContentSignIn,
  GoogleButton,
  Informacion,
  Saludo,
  SignInWrapper,
} from './styles/sSignIn';
import imagenLogo from '../images/logo.webp';

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
      console.log('Usuario registrado con EXITO en Firestore DB');
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
        console.log('este es el valor de q', q);
        if (!querySnapshot.empty) {
          console.log('Usuario YA ESTABA REGISTRADO en Firestore DB');
        } else {
          await handleUpData();
          console.log(
            'No se encontraron registros para el usuario, PROCEDEMOS A REGISTRAR '
          );
        }
        console.log('nos vamos a HOME');
        navigate('/home');
      }
    };
    fetchData();
  }, [currentUser, navigate]);

  return (
    <>
      <Wrapper2>
        {loader && <Loader />}
        <ContentSignIn>
          <SignInWrapper>
            <Saludo>
              <span>
                <h1>Hello</h1>
                <br />
                <h1>
                  <b> Wellcome !</b>
                </h1>
              </span>
              <div className="imagen">
                <img src={imagenLogo} alt="logo" />
              </div>
              <h2>Entre Libros</h2>
            </Saludo>
            <Informacion>
              <h1>Sign in</h1>
              <div>
                <GoogleButton onClick={handleGoogleSignIn}>
                  Continuar con Google
                </GoogleButton>
              </div>
            </Informacion>
          </SignInWrapper>
        </ContentSignIn>
      </Wrapper2>
    </>
  );
};

export default SignIn;
