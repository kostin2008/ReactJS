import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from './signUp.module.scss';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import { createSignUpWithThunk, getErrorAuth } from '../../store/auth';
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatus } from '../../store/auth';


export const SignUp = () => {

  const dispatch = useDispatch();
  let error = useSelector(getErrorAuth);
  let authTrue = useSelector(getAuthStatus);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    dispatch(createSignUpWithThunk(email, password));
  }
 
 
  if (authTrue) {
    return <Redirect to={{ pathname: "/" }} />
  }
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.h2_signin}>Заполните форму ниже для регистрации новой учётной записи.</h2>
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
          {error && <p className={styles.error_class}>{error}</p>}
          <Button variant="contained" color="primary" type="submit">Login</Button>
        </div>
        <hr />
        <p>
          Уже есть аккаунт? <Link to="/signin">Sign in</Link>
        </p>
      </form>
    </div>
  );

};