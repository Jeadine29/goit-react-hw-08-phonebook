import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

function Login() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(login(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;