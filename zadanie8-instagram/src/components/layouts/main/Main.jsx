import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

function Main({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <h1 className={styles.title}>Jerzogram</h1>
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
      <footer className={styles.footer}>Copyright Mięsoft</footer>
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
