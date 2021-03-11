import {Routes, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginRegister from './LoginRegister';
import LoginLostPassword from './LoginLostPassword';
import LoginResetPassword from './LoginResetPassword';
import styles from './Login.module.css';
const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<LoginRegister />} />
          <Route path="/remember-password" element={<LoginLostPassword />} />
          <Route path="/reset-password" element={<LoginResetPassword />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
