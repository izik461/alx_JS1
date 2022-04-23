import React, { useState, useEffect } from 'react';
import { onValue, ref, set } from 'firebase/database';

import database from 'firebase.js';

import Button from 'components/elements/button/Button';
import InputGroup from 'components/elements/inputGroup/InputGroup';
import styles from './App.module.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [personInputValue, setPersonInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');

  useEffect(() => {
    onValue(ref(database, '/'), (snapshot) => {
      const data = snapshot.val();
      setMessages(Object.values(data ?? {}));
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessageId = Date.now();

    set(ref(database, `/${newMessageId}`), {
      id: newMessageId,
      person: personInputValue,
      message: messageInputValue,
    });

    // setPersonInputValue('');
    setMessageInputValue('');
  };

  const handlePersonChange = (event) => {
    setPersonInputValue(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessageInputValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Chat</h1>
      <div className={styles.chatBox}>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.person} wrote: {message.message}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="person"
          type="text"
          label="person label from app.jsx"
          handleChange={handlePersonChange}
          inputValue={personInputValue}
        />
        <InputGroup
          id="message"
          type="text"
          label="message label from App.jsx 2 "
          handleChange={handleMessageChange}
          inputValue={messageInputValue}
        />
        {/* <div>
          <label htmlFor="message">
            Message
            <input
              type="text"
              id="message"
              onChange={handleMessageChange}
              value={messageInputValue}
            />
          </label>
        </div> */}
        <button type="submit">Send</button>
        <Button type="submit">
          <i>&#8508;</i>
          Button children defined in app.jsx
        </Button>
      </form>
    </div>
  );
}

export default App;
