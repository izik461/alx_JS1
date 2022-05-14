import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, signOutUser } from 'services/firebase';
import Button from '../button/Button';
import styles from './style.module.css';

function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(`Current user: ${user}`);
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  const signOut = () => {
    console.log('Tapped signOut');
    signOutUser().then(navigate('/dashboard'));
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logo}>
          <h1 className={styles.title}>Instagram App</h1>
        </Link>
        <nav className={styles.navigation}>
          <ul>
            {currentUser ? (
              <li>
                <Button onClick={signOut}>Sign out</Button>
              </li>
            ) : (
              <>
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
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
