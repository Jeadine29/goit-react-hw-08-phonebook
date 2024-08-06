import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div className={styles.userMenu}>
      <p>{email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default UserMenu;
