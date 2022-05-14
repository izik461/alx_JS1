import React, { useState } from 'react';
import InputGroup from 'components/elements/input-group/InputGroup';
import Main from 'components/layouts/main/Main';
import Button from '../../elements/button/Button';

function Register() {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isErrorValue, setIsErrorValue] = useState('');

  const handleUsernameChanged = (event) => {
    console.log(
      `Handle username change in Register.jsx: ${event.target.value}`
    );
    setUsernameInputValue(event.target.value);
  };

  const handlePasswordChanged = (event) => {
    console.log(
      `Handle password change in Register.jsx: ${event.target.value}`
    );
    setPasswordInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(`Tapped submit. Current username: ${usernameInputValue}`);

    event.preventDefault();
    if (usernameInputValue.length < 5) {
      alert('Name too short, you ****!');
      setIsError(true);
      setIsErrorValue('Name length should be > 5');
      return;
    }
    if (passwordInputValue.length < 5) {
      alert('Password too short, you ****!');
      setIsError(true);
      setIsErrorValue('Password length should be > 5');
      return;
    }
    setIsError(false);

    // update('currentUser', {
    //   name: nameValue,
    // });
  };

  return (
    <Main>
      Hello from Register
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="userName"
          type="text"
          label="Username:"
          handleChange={handleUsernameChanged}
          inputValue={usernameInputValue}
        />
        <InputGroup
          id="password"
          type="text"
          label="Password: "
          handleChange={handlePasswordChanged}
          inputValue={passwordInputValue}
        />
        {isError && <p>{isErrorValue}</p>}

        {/* <Button type="submit">Create account</Button> */}
        <Button btnType="submit">Create account</Button>
      </form>
    </Main>
  );
}

export default Register;
