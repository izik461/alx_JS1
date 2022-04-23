import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import App from './components/pages/App/App';
import MyProfile from './components/pages/MyProfile/MyProfile';

// ręczny router
const getRoute = () => {
  if (window.location.pathname === '/') return <App />;
  if (window.location.pathname === '/me') return <MyProfile />;

  return null;
};

ReactDOM.render(
  <React.StrictMode>{getRoute()}</React.StrictMode>,
  document.getElementById('root')
);
