import { useContext, useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContextProvider';
import { useNavigate } from 'react-router-dom';
import { Wrapper2 } from './theme/generalStyles/generalStyles';
import { AppContext } from '../App';
import Loader from '../components/loader/Loader';

import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const SignIn = () => {
  const { googleSignIn } = UserAuth();
  const { currentUser, usersUid, setUsersUid } = useContext(AppContext);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  // const [users, setUsers] = useState([]);
  // const [currentUid, setCurrentUid] = useState(null);

  useEffect(() => {
    const fetchData1 = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'users'));
        const newUsers = querySnapshot.docs.map((doc) => doc.data().uid);
        setUsersUid(newUsers); // Actualiza el estado `users` con los nuevos datos
        console.log('imprimiendo uid de usuarios', usersUid);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData1();
  }, []);

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
    // fetchData1();
    const fetchData = async () => {
      if (currentUser != null) {
        const isUserRegistered = usersUid.includes(currentUser.uid);
        console.log('¿El usuario está registrado?', isUserRegistered);
        if (!isUserRegistered) {
          await handleUpData();
          console.log('Crea nuevo usuario en firestore DB');
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
        <h1>Sign in</h1>
        <div>
          <button onClick={handleGoogleSignIn}>Google Button</button>
        </div>
      </Wrapper2>
    </>
  );
};

export default SignIn;
