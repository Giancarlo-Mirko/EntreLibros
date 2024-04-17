import Header from '../../components/header/Header';
import { AppContext } from '../../App';
import { useContext } from 'react';
const Home = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <>
      <Header />
      <h1>Home</h1>
      <h3>{currentUser.displayName}</h3>
    </>
  );
};

export default Home;
