import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import styles from './Auth.module.css'; // Ensure this path is correct

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </label>
        <label>
          Password
          <input type="password" name="password" value={password} onChange={handleChange} required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
