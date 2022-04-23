import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

function Main({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          <h1 className={styles.title}>Chat App</h1>
        </a>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="/me">My Profile</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      <footer className={styles.footer}>hello footer</footer>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
