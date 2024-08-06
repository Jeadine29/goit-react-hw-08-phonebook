import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div className={css.container}>
      {isLoggedIn ? (
        <p>
          {user.name}, To see the list of contacts, go to the{' '}
          <Link className={css.link} to="/contacts">
            Contacts
          </Link>
        </p>
      ) : (
        <p>
          Hello, please{' '}
          <Link to="/login" className={css.link}>
            Login
          </Link>{' '}
          or{' '}
          <Link className={css.link} to="/register">
            Register
          </Link>{' '}
          New Phonebook List
        </p>
      )}
    </div>
  );
}