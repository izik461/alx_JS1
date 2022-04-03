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
    window.fetch('http://localhost:3003/todos')
      .then(response => {
        // console.log('Received response: ', response)
        return response.json();
      })
      .then(data => {
        console.log('Jerzyk Received data: ', data)
        setTodos(data)
      })
      .catch(error => {
        console.error('An error occured while fetching todos :( ', error)
        setTodos([])
      })
    setTodos([])
  }

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    // localStorage.setItem('todos', JSON.stringify(newTodos));
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
    const newTodo = {
      id: uuidv4(),
      name: inputValue,
      checked: false,
    }
    const newTodos = [
      ...todos,
      newTodo
    ];

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    };
    fetch('http://localhost:3003/todos', requestOptions)
      .then(response => response.json())
      .then(data =>
        console.log('created TODO:', data));
    saveTodos(newTodos);
    setInputValue('');
  };

  const handleRemove = (id) => {
    console.log('App - Delete button tapped: ', id);
    const todosWithoutDeletedElement = todos.filter(todo => {
      return todo.id !== id;
    })
    // console.log('New elements: ', todosWithoutDeletedElement)
    // const requestOptions = {
    //   method: 'DELETE',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(id)
    // };
    // fetch('http://localhost:3003/todos', requestOptions)
    //   .then(response => response.json())
    //   .then(data =>
    //     console.log('removed TODO:', data));
    saveTodos(todosWithoutDeletedElement)
  }

  const handleToggleCheck = (id) => {
    console.log('App - toggle checkbox: ', id);
    const indexOfTodo = todos.findIndex((todo) => {
      return todo.id == id;
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
