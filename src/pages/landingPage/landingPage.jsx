import { Link } from 'react-router-dom';
import { Wrapper2 } from '../theme/generalStyles/generalStyles';

const landingPage = () => {
  return (
    <>
      <Wrapper2>
        <h1>landingPage</h1>
        <br />
        <h1>
          Welcome <strong>Entre Libros</strong>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In facere
          fuga odio doloribus perspiciatis non provident magni, sequi saepe,
          debitis eaque similique suscipit voluptas consectetur quibusdam
          possimus. Fuga, quos reiciendis!
        </p>
        <br />
        iniciar sesion
        <Link to="/signin">
          <button>INICIAR SESION</button>
        </Link>
      </Wrapper2>
    </>
  );
};

export default landingPage;
