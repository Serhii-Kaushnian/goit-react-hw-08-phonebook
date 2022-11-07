import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return !isLoggedIn ? <Navigate to="/login" /> : <Outlet />;
}
