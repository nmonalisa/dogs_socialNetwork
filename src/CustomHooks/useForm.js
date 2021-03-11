import {useState} from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido.',
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      'Senha deve conter no mínimo 8 caracteres, 1 maiúscula e 1 número.',
  },
};

const useForm = (validationType) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function onChange({target}) {
    // não interromper a digitação do usuário na primeira vez
    // se tiver erro, vai pegar no Onblur
    if (error) validateInputValue(target.value);
    setValue(target.value);
  }

  function onBlur({target}) {
    validateInputValue(target.value);
  }

  function validateInputValue(inputedValue) {
    // usuario não quer validação
    if (validationType === false) return true;
    // validação de campo vazio
    if (inputedValue.length === 0) {
      setError('Campo obrigatório.');
      return false;
    }
    // validação de formato
    if (
      types[validationType] &&
      !types[validationType].regex.test(inputedValue)
    ) {
      setError(types[validationType].message);
      return false;
    }
    // useForm sem parâmetros: valida apenas campo vazio
    setError(null);
    return true;
  }

  return {
    value,
    setValue,
    onChange,
    error,
    onBlur,
    validate: () => validateInputValue(value),
  };
};

export default useForm;
