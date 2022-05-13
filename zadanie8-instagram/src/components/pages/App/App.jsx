import React from 'react'; // , { useState, useEffect } from 'react';

import Button from 'components/elements/button/Button';
import MainLayout from 'components/layouts/main/Main';
import styles from './App.module.css';

function App() {
  // const [messages, setMessages] = useState([]);
  // const [personInputValue, setPersonInputValue] = useState('');
  // const [messageInputValue, setMessageInputValue] = useState('');

  // useEffect(() => {
  //   // observe('messages/', setMessages);
  //   // get('currentUser').then((user) => {
  //   //   console.log(user);
  //   // });
  // }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newMessageId = Date.now();

  //   save('messages/', {
  //     id: newMessageId,
  //     person: personInputValue,
  //     message: messageInputValue,
  //   });

  //   // setPersonInputValue('');
  //   setMessageInputValue('');
  // };
  // const handlePersonChange = (event) => {
  //   setPersonInputValue(event.target.value);
  // };

  // const handleMessageChange = (event) => {
  //   setMessageInputValue(event.target.value);
  // };

  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <h1>Main page</h1>
      </div>
    </MainLayout>
  );
}

export default App;
