import React, { useState } from 'react';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setbodyValue] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tapped submit`);
    if (titleValue.length < 1) {
      alert('Title too short, you ****!');
      setIsError(true);
      return;
    }
    setIsError(false);

    console.log(`TODO: should create post: ${titleValue}: ${bodyValue}`);
    // update('currentUser', {
    //   name: nameValue,
    // });
    navigate('/dashboard');
  };

  return (
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
        <button type="submit">Create du post</button>
      </form>
    </Main>
  );
}

export default CreatePost;
