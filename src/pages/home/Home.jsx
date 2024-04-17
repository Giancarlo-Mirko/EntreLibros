import Header from '../../components/header/Header';
import { UserAuth } from '../../context/AuthContextProvider';
const Home = () => {
  const { user } = UserAuth();
  return (
    <>
      <Header />
      <h1>Home</h1>
      <h3>{user.displayName}</h3>
    </>
  );
};

export default Home;
