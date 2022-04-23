import React, { useState } from 'react';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/inputGroup/InputGroup';

function MyProfile() {
  const [nameValue, setNameValue] = useState('');
  const handleValueChanged = (event) => {
    console.log(`Handle Change in MyProfile.jsx: ${event.target.value}`);
    setNameValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tapped submit with name provided: ${nameValue}`);
    // const newMessageId = Date.now();

    // save('/', {
    //   id: newMessageId,
    //   person: personInputValue,
    //   message: messageInputValue,
    // });

    // setPersonInputValue('');
    // setMessageInputValue('');
  };

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="Name"
          type="text"
          label="Name label"
          handleChange={handleValueChanged}
          inputValue={nameValue}
        />
        <button type="submit">Send</button>
      </form>
    </Main>
  );
}

export default MyProfile;
