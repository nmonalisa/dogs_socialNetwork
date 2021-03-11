import {createContext, useState} from 'react';
import {userAuthenticate, userGet} from '../api/endpoints';
import {useNavigate} from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({children}) => {
  const [userInfos, setUserInfos] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function getUserInfos(token) {
    const {url, options} = userGet(token);
    const response = await fetch(url, options);
    const respJSON = await response.json();
    setUserInfos(respJSON);
    navigate('/account');
    setIsLogged(true);
    setLoading(false);
  }

  async function login(username, password) {
    setLoading(true);
    const {url, options} = userAuthenticate({username, password});
    const response = await fetch(url, options);
    const {token} = await response.json();
    window.localStorage.setItem('token', token);
    getUserInfos(token);
  }

  function logout() {
    setUserInfos({});
    setLoading(false);
    setIsLogged(false);
    navigate('/login');
  }

  return (
    <UserContext.Provider value={{login, logout, userInfos, isLogged, loading}}>
      {children}
    </UserContext.Provider>
  );
};
