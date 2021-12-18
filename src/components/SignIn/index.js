import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './signIn.module.scss';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { createSignInWithThunk, getErrorAuth } from '../../store/auth';
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatus } from '../../store/auth';

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authTrue = useSelector(getAuthStatus);
  const dispatch = useDispatch();
  let error = useSelector(getErrorAuth);

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(createSignInWithThunk(email, password));
  };

  if (authTrue) { 
    return <Redirect to={{ pathname: "/" }} />
  }
  return (
    <div>
      <h2 className={styles.h2_signin}>Заполните форму ниже, чтобы войти в свою учетную запись.</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={styles.input_email}
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div>
          <input
            className={styles.input_password}
            placeholder="Password"
            name="password"
            onChange={handlePassChange}
            value={password}
            type="password"
          />
        </div>
        <div>
          {error && <p>{error}</p>}
          <Button variant="contained" color="primary" type="submit">Login</Button>
        </div>
        <hr />
        <p>
          У вас нет учетной записи? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );

};

