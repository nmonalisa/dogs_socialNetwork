import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import ErrorLabel from '../../Components/ErrorLabel';
import styles from './UserPost.module.css';
import useForm from '../../CustomHooks/useForm';
import useFetch from '../../CustomHooks/useFetch';
import {postPhoto} from '../../api/endpoints';

const UserPost = () => {
  const [img, setImg] = useState({});
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const {data, error, loading, request} = useFetch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);
    const token = window.localStorage.getItem('token');
    const {url, options} = postPhoto(formData, token);
    request(url, options);
  }

  useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  function handleImgChange({target}) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" label="Nome" {...name} />
        <Input type="text" name="weight" label="Peso" {...weight} />
        <Input type="text" name="age" label="Idade" {...age} />
        <input
          type="file"
          name="img"
          id="img"
          className={styles.file}
          onChange={handleImgChange}
        />
        {loading ? <Button disabled>Enviando</Button> : <Button>Enviar</Button>}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{backgroundImage: `url('${img.preview}')`}}
          ></div>
        )}
      </div>
      <ErrorLabel error={error} />
    </section>
  );
};

export default UserPost;
