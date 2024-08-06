import { Button, TextField, Container, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

function Register() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(register(user));
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Email" name="email" type="email" required fullWidth margin="normal" />
        <TextField label="Password" name="password" type="password" required fullWidth margin="normal" />
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </Container>
  );
}

export default Register;