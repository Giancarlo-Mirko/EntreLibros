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

const AppContext = createContext();
const { Provider: AppProvider } = AppContext;

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
              <Route path="/signin" element={<SignIn />} />
              <Route
                path="/home"
                element={currentUser ? <Home /> : <Navigate to="/signin" />}
              />
            </Routes>
          </Router>
        </AuthContextProvider>
      </AppProvider>
    </>
  );
}

export { App, AppContext };
