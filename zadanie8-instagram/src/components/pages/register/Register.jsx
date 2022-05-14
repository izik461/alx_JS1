import React, { useState } from 'react';
import InputGroup from 'components/elements/input-group/InputGroup';
import Main from 'components/layouts/main/Main';
import { useNavigate } from 'react-router-dom';
import Button from '../../elements/button/Button';
import { registerUser } from '../../../services/firebase';

function Register() {
  const [emailInputValue, setEmailInputValue] = useState('');
  const [passwordInputValue, setPasswordInputValue] = useState('');
  const [isError, setIsError] = useState(false);
  const [isErrorValue, setIsErrorValue] = useState('');
  const [apiErrorValue, setApiErrorValue] = useState('');

  const navigate = useNavigate();

  const handleEmailChanged = (event) => {
    console.log(`Handle email change in Register.jsx: ${event.target.value}`);
    setEmailInputValue(event.target.value);
  };

  const handlePasswordChanged = (event) => {
    console.log(
      `Handle password change in Register.jsx: ${event.target.value}`
    );
    setPasswordInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(`Tapped submit. Current email: ${emailInputValue}`);

    event.preventDefault();
    if (emailInputValue.length < 5) {
      setIsError(true);
      setIsErrorValue('Email length should be > 5');
      return;
    }
    if (passwordInputValue.length < 5) {
      setIsError(true);
      setIsErrorValue('Password length should be > 5');
      return;
    }
    setIsError(false);

    registerUser(emailInputValue, passwordInputValue)
      .then(() => {
        setApiErrorValue('');
        navigate('/dashboard');
      })
      .catch((error) => {
        setApiErrorValue(`Error creating user: ${error.message}`);
      });
  };

  return (
    <Main>
      Hello from Register
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="userName"
          type="text"
          label="Email:"
          handleChange={handleEmailChanged}
          inputValue={emailInputValue}
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
      {apiErrorValue && (
        <p>
          API error:
          {apiErrorValue}
        </p>
      )}
    </Main>
  );
}

export default Register;
