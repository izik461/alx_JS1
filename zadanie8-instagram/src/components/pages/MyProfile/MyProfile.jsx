import React, { useState } from 'react';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'services/firebase';

function MyProfile() {
  const [emailValue, setEmailValue] = useState('');
  const [displayNameValue, setDisplayNameValue] = useState('');

  const handleDisplayNameChanged = (event) => {
    console.log(`Handle Change in MyProfile.jsx: ${event.target.value}`);
    setDisplayNameValue(event.target.value);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(`MyProfile: Current user: ${user}`);
      setEmailValue(user.email);
      setDisplayNameValue(user.displayName);
    } else {
      setEmailValue('');
      setDisplayNameValue('');
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tapped submit with displayName provided: ${displayNameValue}`);

    // update('currentUser', {
    //   name: nameValue,
    // });
  };

  return (
    <Main>
      <h1>My profile</h1>
      <div>Email: {emailValue}</div>
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="displayName"
          type="text"
          label="person label from app.jsx"
          handleChange={handleDisplayNameChanged}
          inputValue={displayNameValue}
        />
        <Button btnType="submit">Update your profile</Button>
      </form>
    </Main>
  );
}

export default MyProfile;
