import { useEffect, useContext } from 'react';

import { useAuth } from '@contexts/AuthContext';
import withAuth from '@hocs/withAuth';
// import { UserContext } from '@contexts/UserContext';
import Cookie from 'js-cookie';

export default withAuth(function Logout() {
  // const [userInfo, setUserInfo] = useContext(UserContext);
  const { setAuthenticated } = useAuth();
  useEffect(() => {
    async function doLogout() {
      const response = await fetch('/api/logout');
      if (response.status === 200) {
        Cookie.remove('accessToken');
        localStorage.removeItem('roles');
        localStorage.removeItem('username');
        setAuthenticated(false);
      } else {
        console.error('Failed to logout', response);
      }
    }
    doLogout();
  }, [setAuthenticated]);
  return (
    <div className="loading-spinnder">
      <span className="sr-only">Loging Out...</span>
    </div>
  );
}, '/');
