import React from "react";

const TodoList = (props) => {
  // lub const { todos } = props - destrukturyzacja

  return (
    <ul>
      {/* <li>Some sample element</li> */}
      {props.todoList.map((todo, index) => {
        return <li key={index}>{todo.name}</li>;
      })}
    </ul>
  );
};

//walidacja propsów
// TOdoList.propTypes + biblioteka propTypes

export default TodoList;
