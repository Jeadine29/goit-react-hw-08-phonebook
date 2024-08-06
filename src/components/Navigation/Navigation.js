import { Loader } from '../Loader/Loader'; // Update this path if needed
import { useAuth } from '../../hooks'; // Ensure this path is correct
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';
import { BiHome, BiSave } from 'react-icons/bi';
import UserMenu from '../UserMenu/UserMenu'; // Ensure correct path and case

export default function Navigation() {
  const StyledLink = styled(NavLink)`
    &.active {
      color: orange;
    }
  `;
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.nav__link} to="/" end>
            <BiHome />
          </StyledLink>
          {isLoggedIn ? (
            <>
              <StyledLink className={css.nav__link} to="/contacts" end>
                <BiSave />
              </StyledLink>
              <UserMenu />
            </>
          ) : (
            <>
              <StyledLink className={css.nav__link} to="/register" end>
                Register
              </StyledLink>
              <StyledLink className={css.nav__link} to="/login" end>
                Login
              </StyledLink>
            </>
          )}
        </nav>
      </header>

      <Outlet />
    </>
  );
}
