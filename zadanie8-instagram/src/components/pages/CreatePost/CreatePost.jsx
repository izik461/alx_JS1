import React, { useState } from 'react';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import { useNavigate } from 'react-router-dom';
import { RestrictedRoute } from 'utils/AuthorisationRoutes';
import { addFileToStorage } from 'services/firebase';

function CreatePost() {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setbodyValue] = useState('');
  const [fileValue, setFileValue] = useState('');
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleTitleValueChange = (event) => {
    console.log(`Handle title change in CreatePost.jsx: ${event.target.value}`);
    setTitleValue(event.target.value);
  };

  const handleBodyValueChange = (event) => {
    console.log(`Handle body change in CreatePost.jsx: ${event.target.value}`);
    setbodyValue(event.target.value);
  };

  const handleFileChange = (event) => {
    console.log(`Handle file change in CreatePost.jsx}`);
    setFileValue(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tapped submit`);
    if (titleValue.length < 1) {
      alert('Title too short, you ****!');
      setIsError(true);
      return;
    }
    setIsError(false);

    // update('currentUser', {
    //   name: nameValue,
    // });
    addFileToStorage(fileValue);
    navigate('/dashboard');
  };

  return (
    <RestrictedRoute>
      <Main>
        <form onSubmit={handleSubmit}>
          <h1>Welcom to post creation form</h1>
          <InputGroup
            id="title"
            type="text"
            label="Title:"
            handleChange={handleTitleValueChange}
            inputValue={titleValue}
          />
          {isError && <p>The title should not be empty.</p>}
          <InputGroup
            id="body"
            type="text"
            label="Body:"
            handleChange={handleBodyValueChange}
            inputValue={bodyValue}
          />
          <InputGroup
            id="file"
            type="file"
            label="PostImage:"
            handleChange={handleFileChange}
            // inputValue={fileValue}
          />
          <button type="submit">Create du post</button>
        </form>
      </Main>
    </RestrictedRoute>
  );
}

export default CreatePost;