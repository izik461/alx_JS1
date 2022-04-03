import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Chat</h1>
      <div className={styles.chatBox}>Okno chatu</div>
      <form action="">
        <div>
          <label htmlFor="person">
            Person
            <input type="text" id="person" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <input type="text" id="message" />
          </label>
        </div>
      </form>
    </div>
  );
}

export default App;