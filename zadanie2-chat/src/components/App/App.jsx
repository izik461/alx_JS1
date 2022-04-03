import React, { useEffect } from 'react';
import styles from './App.module.css';
import database from '../../firebase'
import { onValue, ref } from 'firebase/database';

const messages = [
  {
    id: 1,
    person: 'Damian',
    message: 'Hej ho!'
  },
  {
    id: 2,
    person: 'Agnieszka',
    message: 'Poklikasz?'
  },
]

function App() {
  useEffect(() => {
    onValue(ref(database, '/'), snapshot => {
      const data = snapshot.val();
      console.log('Received database MAIN DIR snapshot: ', data)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1>Chat</h1>
      <div className={styles.chatBox}>Okno chatu
        <ul>
          {messages.map((aMessage) => {
            return <li>{aMessage.person} wrote: {aMessage.message}</li>
          })}
        </ul>
      </div>
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