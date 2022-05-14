import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';

import { registerUser } from 'services/firebase';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // @TODO Walidacja

    registerUser(email, password)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        setApiError(error.message);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Main>
      <form className="form" onSubmit={handleSubmit}>
        <InputGroup
          id="email"
          type="text"
          label="email"
          handleChange={handleEmailChange}
          inputValue={email}
        />
        <InputGroup
          id="password"
          type="password"
          label="password"
          handleChange={handlePasswordChange}
          inputValue={password}
        />
        <Button btnType="submit">Sign up</Button>
        {apiError && <p>{apiError}</p>}
      </form>
    </Main>
  );
}

export default Register;
