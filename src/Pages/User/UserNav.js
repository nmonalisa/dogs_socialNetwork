import {useContext, useState, useEffect} from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import {UserContext} from '../../Context/userContext';
import {ReactComponent as FeedImg} from '../../Assets/feed.svg';
import {ReactComponent as StatsImg} from '../../Assets/estatisticas.svg';
import {ReactComponent as AddPhotoImg} from '../../Assets/adicionar.svg';
import {ReactComponent as LogOutImg} from '../../Assets/sair.svg';
import styles from './UserNav.module.css';
import useMedia from '../../CustomHooks/useMedia';

const UserNav = () => {
  const {logout} = useContext(UserContext);
  const isMobile = useMedia('(max-width: 40rem)');
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const {pathname} = useLocation();

  useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {isMobile && (
        <button
          aria-label="Menu mobile"
          className={`${styles.mobileButton} ${
            showMobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        ></button>
      )}

      <nav
        className={`${isMobile ? styles.navMobile : styles.nav} ${
          showMobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end activeClassName={styles.active}>
          <FeedImg />
          {isMobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/account/stats" activeClassName={styles.active}>
          <StatsImg />
          {isMobile && 'Estatística'}
        </NavLink>
        <NavLink to="/account/post" activeClassName={styles.active}>
          <AddPhotoImg />
          {isMobile && 'Adicionar fotos'}
        </NavLink>
        <button onClick={logout}>
          <LogOutImg />
          {isMobile && 'Sair'}
        </button>
      </nav>
    </>
  );
};

export default UserNav;
