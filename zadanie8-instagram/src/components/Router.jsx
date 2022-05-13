import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from 'components/pages/App/App';
import MyProfile from 'components/pages/MyProfile/MyProfile';
import NotFound from './pages/NotFound/NotFound';
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
