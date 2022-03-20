import React, { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList";

import styles from "./App.module.css";

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [showError, setShowError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {}, [todos]); // uruchomienie przy kazdej zmianie todos
  useEffect(() => {
    const lsTodos = localStorage.getItem("todos") ?? [];
    console.log("localStorage todos at load: " + lsTodos);

    setTodos(JSON.parse(lsTodos));
  }, []);

  const handleInputChange = (event) => {
    // console.log("App.jsx HandleInputChange fired: " + event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmitButtonTapped = (event) => {
    console.log("handleSubmitButtonTapped fired: " + event.target.value);
    event.preventDefault();
    const currentText = inputValue;
    if (currentText.length < 2) {
      // alert("Input not valid. Length<2");
      // setErrorMessage("Invalid input. Length<2");
      setShowError(true);
      return;
    }
    // setErrorMessage("");
    setShowError(false);
    const newTodos = [
      ...todos,
      {
        name: inputValue,
        checked: false,
      },
    ];
    setTodos(newTodos);
    setInputValue("");
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div>
      <h1>TODO LIST:</h1>
      <form>
        <input
          type="text"
          placeholder="Add a todo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" onClick={handleSubmitButtonTapped}>
          Send todo
        </button>
      </form>
      {showError ? (
        <p className={styles.error}>Invalid input. :( :( :(</p>
      ) : null}
      <TodoList todoList={todos} />
    </div>
  );
};
