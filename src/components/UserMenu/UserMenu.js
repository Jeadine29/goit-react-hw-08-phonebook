import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/slice';

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user && (
        <>
          <p>{user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default UserMenu;