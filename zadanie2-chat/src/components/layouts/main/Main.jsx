import React from 'react';
import PropTypes from 'prop-types';

function MainLayout({ children }) {
  return (
    <>
      <header>Hello header - main.jsx</header>
      <div className="content">{children}</div>
      <footer>Hello footer</footer>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
