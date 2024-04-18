import Header from '../../components/header/Header';
import { AppContext } from '../../App';
import { useContext } from 'react';

import { db } from '../../firebase/firebase';
import { addDoc, collection } from 'firebase/firestore';
const Home = () => {
  const { currentUser } = useContext(AppContext);

  const handleUpData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        nombre: currentUser.displayName || 'Nombre no disponible',
        email: currentUser.email || 'Email no disponible',
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };
  return (
    <>
      <Header />
      <h1>Home</h1>
      <h3>{currentUser.displayName}</h3>
      <button onClick={handleUpData}>subir data</button>
    </>
  );
};

export default Home;
