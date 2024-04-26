import { useState, createContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage.jsx';
import SignIn from './pages/SignIn.jsx';
import { getAuth } from 'firebase/auth';
import { AuthContextProvider } from './context/AuthContextProvider.jsx';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';
import Libros from './pages/libros/Libros.jsx';
import Prueba from './Prueba.jsx';

const AppContext = createContext();
const { Provider: AppProvider, Consumer } = AppContext;

function App() {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState(auth.currentUser || null);
  const [dataOfUser, setDataOfUser] = useState(null);

  const appValue = {
    setCurrentUser,
    currentUser,
    setDataOfUser,
    dataOfUser,
  };
  return (
    <>
      <AppProvider value={appValue}>
        <AuthContextProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/prueba" element={<Prueba/>} />
              {/* <Route path="/signin" element={<SignIn />} /> */}
              <Route
                path="/signin"
                element={!currentUser ? <SignIn /> : <Navigate to="/home" />}
              />
              <Route
                path="/home"
                element={currentUser ? <Home /> : <Navigate to="/signin" />}
              />
              <Route
                path="/perfil"
                element={currentUser ? <Profile /> : <Navigate to="/signin" />}
              />
              <Route
                path="/libros"
                element={currentUser ? <Libros /> : <Navigate to="/signin" />}
              />
            </Routes>
          </Router>
        </AuthContextProvider>
      </AppProvider>
    </>
  );
}

export { App, Consumer, AppContext };
