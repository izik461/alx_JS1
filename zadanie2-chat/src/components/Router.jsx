import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from 'components/pages/App/App';
import MyProfile from 'components/pages/MyProfile/MyProfile';

// ręczny router
// const getRoute = () => {
//   if (window.location.pathname === '/') return <App />;
//   if (window.location.pathname === '/me') return <MyProfile />;

//   return null;
// };

// react-router-dom
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/me" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
