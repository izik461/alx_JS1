import React from 'react';

import styles from './TodoList.module.css';

const TodoList = (props) => {
  if (!Array.isArray(props.todoList) || props.todoList.length === 0) return null;

  const myHandleRemove = (name, externalHandleRemove) => {
    console.log('TodoList - delete button tapped: ', name);
    externalHandleRemove;
  }

  const myHandleToggleCheckbox = (name, externalHandleToggleCheckbox) => {
    console.log('TodoList - checkbox tapped: ', name);
    externalHandleToggleCheckbox;
  }

  return (
    <ul className={styles.list}>
      {
        props.todoList.map((todo) =>
          <li key={todo.uuid}>
            <input type="checkBox" checked={todo.checked} onChange={() => myHandleToggleCheckbox(todo.name, props.toggleCheckbox(todo.uuid))} />
            {' '}
            <span className={todo.checked ? styles.completed : ''}>{todo.name}</span>
            {' '}
            <button onClick={() => myHandleRemove(todo.name, props.onRemove(todo.uuid))}> X</button>
          </li>)
      }
    </ul>
  );
};

// walidacja propsow - prop-types
// https://www.npmjs.com/package/prop-types

// TodoList.propTypes = {
//   todoList: propTypes.Array,
// };

export default TodoList;
