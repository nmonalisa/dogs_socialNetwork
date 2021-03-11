import {useContext} from 'react';
import Input from '../../Components/Input';
import ErrorLabel from '../../Components/ErrorLabel';
import Button from '../../Components/Button';
import useForm from '../../CustomHooks/useForm';
import {userRegister} from '../../api/endpoints';
import {UserContext} from '../../Context/userContext';
import useFetch from '../../CustomHooks/useFetch';

const LoginRegister = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm('password');
  const {login} = useContext(UserContext);
  const {request, loading, error} = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const {url, options} = userRegister({
      username: username.value,
      email: email.value,
      password: password.value,
    });

    const {response} = await request(url, options);
    if (response.ok) login(username.value, password.value);

    // enviar para a tela de login?
  }

  return (
    <section>
      <h2 className="title">Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="username" {...username} />
        <Input label="E-mail" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
      </form>

      {error && <ErrorLabel error={error} />}
    </section>
  );
};

export default LoginRegister;
