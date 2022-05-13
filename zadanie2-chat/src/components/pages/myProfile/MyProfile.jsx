import React, { useState } from 'react';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/inputGroup/InputGroup';
import { update } from 'services/firebase';

function MyProfile() {
  const [nameValue, setNameValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleValueChanged = (event) => {
    console.log(`Handle Change in MyProfile.jsx: ${event.target.value}`);
    setNameValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tapped submit with name provided: ${nameValue}`);
    if (nameValue.length < 5) {
      alert('Name too short, you ****!');
      setIsError(true);
      return;
    }
    setIsError(false);

    update('currentUser', {
      name: nameValue,
    });
  };

  return (
    <Main>
      <form onSubmit={handleSubmit}>
        <h1>My profile</h1>
        <InputGroup
          id="name"
          type="text"
          label="Name:"
          handleChange={handleValueChanged}
          inputValue={nameValue}
        />
        {isError && <p>The name should be longer than 5</p>}
        <button type="submit">Save</button>
      </form>
    </Main>
  );
}

export default MyProfile;
