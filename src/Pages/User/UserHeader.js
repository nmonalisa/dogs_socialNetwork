import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import UserNav from './UserNav';
import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = useState('');
  const {pathname} = useLocation();

  useEffect(() => {
    switch (pathname) {
      case '/account/stats':
        setTitle('Estatísticas');
        break;
      case '/account/post':
        setTitle('Postar foto');
        break;
      default:
        setTitle('Minhas fotos');
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <h2 className="title">{title}</h2>
      <UserNav />
    </header>
  );
};

export default UserHeader;
