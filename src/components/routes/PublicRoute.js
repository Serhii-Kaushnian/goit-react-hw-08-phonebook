import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

export default function PublicRoute() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Navigate to="contacts" /> : <Outlet />;
}
