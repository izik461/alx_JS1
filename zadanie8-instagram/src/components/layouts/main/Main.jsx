import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { observeOnlyNew } from 'services/firebase';

import Header from 'components/elements/header/Header';
import Footer from 'components/elements/footer/Footer';

import { MainContext } from 'contexts/main';
import styles from './style.module.css';
import 'react-toastify/dist/ReactToastify.css';

function Main({ children }) {
  const { currentUser } = useContext(MainContext);
  useEffect(() => {
    observeOnlyNew('notifications', (notification) => {
      console.log(`Received notification for: ${notification.reciepient}`);
      if (notification.reciepient === currentUser.displayName) {
        toast(`${notification.value}`);
      }
    });
  });
  return (
    <>
      <Header />
      <main className={`container ${styles.main}`}>{children}</main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
