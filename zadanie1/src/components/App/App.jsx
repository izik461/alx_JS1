import React, { useState, useEffect } from "react";
import TodoList from "../TodoList/TodoList";

const TODO_ARRAY = [
  {
    name: "Zadanie 1",
    checked: false,
  },
  { name: "Zadanie 2", checked: true },
];

export const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(TODO_ARRAY);

  // useEffect(() => {}, [todos]); // uruchomienie przy kazdej zmianie todos
  // useEffect(() => {
  //   console.log("Useffect uruchomiony po zaladowaniu");
  //   const lsTodos = localStorage.getItem("todos") ?? [];
  //   // todos = lsTodos;
  // }, []);
  // todos;

  const handleInputChange = (event) => {
    console.log("App.jsx HandleInputChange fired: " + event.target.value);
    setInputValue(event.target.value);
  };

  const handleSubmitButtonTapped = (event) => {
    console.log("handleSubmitButtonTapped fired: " + event.target.value);
    event.preventDefault();
    const currentText = inputValue;
    if (currentText.length < 2) {
      alert("Input not valid. Length<2");
      return;
    }

    setTodos([
      ...todos,
      {
        name: inputValue,
        checked: false,
      },
    ]);
    setInputValue("");
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
      <TodoList todoList={TODO_ARRAY} />
    </div>
  );
};
