const { MainContext } = require('contexts/main');
const { useContext, useEffect } = require('react');
const { useNavigate } = require('react-router-dom');

export function RestrictedRoute() {
  const { currentUser } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
  }, []);
}

export function HomeRoute() {
  return null;
}
