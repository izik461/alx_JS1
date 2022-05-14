import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import styles from './style.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logo}>
          <h1 className={styles.title}>Instagram App</h1>
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link to="/login">
                <Button>Sign in</Button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <Button>Sign up</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
