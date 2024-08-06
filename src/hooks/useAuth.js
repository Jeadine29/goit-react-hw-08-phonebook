import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
} from '../redux/Auth/selectors'; // Ensure this path is correct

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};