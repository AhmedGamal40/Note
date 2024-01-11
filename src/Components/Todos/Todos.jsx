import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <div className="todos-list">
      {props.todos.length > 0 ? (
        props.todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              toggleTodo={props.toggleTodo}
              deleteTodo={props.deleteTodo}
              editTodo={props.editTodo}
              mode={props.mode}
            />
          );
        })
      ) : (
        <h3 className="no-todos"> لأ توجد مهام الان ....</h3>
      )}
    </div>
  );
}

export default Todos;
