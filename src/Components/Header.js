import {useContext} from 'react';
import {UserContext} from '../Context/userContext';
import {Link} from 'react-router-dom';
import styles from './Header.module.css';
import {ReactComponent as DogImg} from '../Assets/dogs.svg';

const Header = () => {
  const {userInfos, isLogged} = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`}>
        <Link to="/">
          <DogImg />
        </Link>
        {isLogged ? (
          <Link to="/account" className={styles.login}>
            {userInfos && userInfos.nome}
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
