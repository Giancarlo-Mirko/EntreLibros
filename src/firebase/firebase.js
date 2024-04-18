// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDjLPo5YH5V3jLcrvx4Kg0RglRk32s9AA',
  authDomain: 'entre-libros.firebaseapp.com',
  projectId: 'entre-libros',
  storageBucket: 'entre-libros.appspot.com',
  messagingSenderId: '228907141488',
  appId: '1:228907141488:web:790ea69797939400dfa7b5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
