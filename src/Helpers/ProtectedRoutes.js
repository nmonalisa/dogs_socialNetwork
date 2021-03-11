import {useContext} from 'react';
import {UserContext} from '../Context/userContext';
import {Route, Navigate} from 'react-router-dom';

const ProtectedRoute = (props) => {
  const {isLogged} = useContext(UserContext);

  if (isLogged === true) return <Route {...props} />;
  else if (isLogged === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;
