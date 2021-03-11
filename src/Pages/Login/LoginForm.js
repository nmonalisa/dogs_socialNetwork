import {useContext} from 'react';
import {Link} from 'react-router-dom';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import useForm from '../../CustomHooks/useForm';
import {UserContext} from '../../Context/userContext';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const {login, loading} = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    // erro começa null e só muda quando o user passa por um campo (onblur e onchange). Mas usuário pode tentar submeter com campos vazios e o erro permanecer null. Validar tb no clique do btn submit:
    if (username.validate() && password.validate()) {
      login(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" name="username" {...username} />
        <Input type="password" label="Senha" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
      </form>
      <Link className={styles.lostPass} to="/login/lost-password">
        Perdeu a senha?
      </Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta?Cadastre-se no site.</p>
        <Link to="/login/register">
          <Button>Cadastrar</Button>
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
