import React from "react";

const TodoList = (props) => {
  const todos = props.todolist;
  // lub const { todos } = props - destrukturyzacja
  return (
    <ul>
      <li>Some sample element</li>
      {todos.map((todo, index) => {
        {
          return <li key={index}>{todos.name}</li>;
        }
      })}
    </ul>
  );
};

//walidacja propsów
// TOdoList.propTypes + biblioteka propTypes

export default TodoList;
