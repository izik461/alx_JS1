import React from "react";

import styles from "./ToDoList.module.css";

const TodoList = (props) => {
  return (
    <ul>
      {props.todoList.map((todo, index) => {
        const randomPriority = Math.floor(Math.random() * 3);
        let priorityString = "minor";
        switch (randomPriority) {
          case 0:
            priorityString = "minor";
            break;
          case 1:
            priorityString = "major";
            break;
          default:
            priorityString = "critical";
            break;
        }
        console.log(
          "using priorityString: " + randomPriority + " " + priorityString
        );
        // const className = "styles." + priorityString;
        // console.log("using className: " + className);
        return (
          <li key={index} className={styles[priorityString]}>
            {todo.name}
          </li>
        );
      })}
    </ul>
  );
};

//walidacja propsów
// TOdoList.propTypes + biblioteka propTypes

export default TodoList;
