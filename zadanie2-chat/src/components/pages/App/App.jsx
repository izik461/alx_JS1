import React, { useState, useEffect } from 'react';

import { observe, save } from 'services/firebase';

import Button from 'components/elements/button/Button';
import InputGroup from 'components/elements/inputGroup/InputGroup';
import MainLayout from 'components/layouts/main/Main';
import styles from './App.module.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [personInputValue, setPersonInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');

  useEffect(() => {
    observe('/', setMessages);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessageId = Date.now();

    save('/', {
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
    <MainLayout>
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
          <button type="submit">Send</button>
          <Button type="submit">
            <i>&#8508;</i>
            Button children defined in app.jsx
          </Button>
        </form>
      </div>
    </MainLayout>
  );
}

export default App;
