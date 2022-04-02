import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList/TodoList.jsx';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';

// ES6 Destructurization

// useState()
// React.useState

// Destukturyzacja tablic

// const cars = ['Mercedes', 'Audi', 'BMW'];
// console.log(cars[0]) // Audi
// console.log(cars[1]) // Mercedes

// const mercedes = cars[0]
// const audi = cars[1]

// const [mercedes, audi, bmw] = cars

// To jest zle, bo liczy sie index z tablicy bazowej

// const [audi, bmw] = cars

// Destrukturyzacja obiektow

// const person = {
//   name: 'Damian',
//   city: Warsaw,
//   shoe: 43
// };

// console.log(person.name)
// console.log(person.city)

// const { name } = person;
// console.log(name) //person.name

// const { name : differentValue } = person

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  useEffect(() => {
    // nullish operator ?? []
    loadTodos()
  }, []);

  const loadTodos = () => {
    const todosFromLS = JSON.parse(localStorage.getItem('todos')) ?? [];
    setTodos(todosFromLS);
  }

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // walidacja
    if (inputValue.length < 2) {
      setIsErrorMessage(true);
      return;
    }

    const newTodos = [
      ...todos,
      {
        uuid: uuidv4(),
        name: inputValue,
        checked: false,
      },
    ];

    setTodos(newTodos);
    // todos bedzie jeszcze stare !!
    localStorage.setItem('todos', JSON.stringify(newTodos));


    setInputValue('');
  };

  const handleRemove = (uuid) => {
    // console.log('App - Delete button tapped: ', uuid);
    const todosWithoutDeletedElement = todos.filter(todo => {
      return todo.uuid !== uuid;
    })
    // console.log('New elements: ', todosWithoutDeletedElement)
    saveTodos(todosWithoutDeletedElement)
  }

  const handleToggleCheck = (uuid) => {
    console.log('App - toggle checkbox: ', uuid);
    const indexOfTodo = todos.findIndex((todo) => {
      return todo.uuid == uuid;
    })
    const todoToBeChanged = todos[indexOfTodo];
    console.log("Will toggle element: ", todoToBeChanged)
    const changedTodos = [...todos];
    changedTodos[indexOfTodo].checked = !changedTodos[indexOfTodo].checked
    // console.log('Updated after toggle: ', todos)
    saveTodos(changedTodos);
  }

  return (<div>
    <h1>Todo list</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write todo" value={inputValue} onChange={handleInputChange} />
      <button type="submit">send todo</button>
      {isErrorMessage ? <p className={styles.error}>Za malo znaków. Minimum 3</p> : null}
    </form>
    <TodoList todoList={todos} onRemove={handleRemove} toggleCheckbox={handleToggleCheck} />
  </div>);
};

export default App;
