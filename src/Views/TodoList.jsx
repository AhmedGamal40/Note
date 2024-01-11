import React, { useState } from "react";
import Todos from "../Components/Todos/Todos";
import TodosForm from "../Components/Todos/TodosForm";

const initialData = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : []; ;
function TodoList() {
  const [todos, setTodos] = useState(initialData);
  // Mode : add , filter , edit
  const [mode, setMode] = useState("add");

  const [activTodo, setActivTodo] = useState(null);

  // set to LocalStorage ;
  const setToLocalStorage = () => {
    localStorage.setItem('todos' , JSON.stringify(todos));
  }

  // check todo
  const toggleTodo = (id) => {
    setTodos((data) => {
      const newData = data.map((td) => {
        if (td.id === id) {
          return { ...td, done: !td.done };
        }
        return td;
      });
      return newData;
    });
  };
  // delete todo
  const deleteTodo = (id) => {
    setTodos((data) => {
      const newData = data.filter((td) => td.id !== id);
      return newData;
    });
  };

  // add new todo
  const addTodo = (title) => {
    if (mode !== 'edit') {
      const newTodo = {
        id: new Date().getTime(),
        title,
        done: false,
      };
      setTodos((data) => {
        return [newTodo, ...data];
      });
    } else if (mode === 'edit'){
      const newEditTitle = todos.map(t => {
        if (t.id === activTodo.id) {
          t.title = title
        }
        return t ;
      });
      setTodos(newEditTitle);
      setMode('add');
    }
  };

  // filtier toggle
  const toggleFilter = () => {
    if (mode === "edit") {
      return ;
    }
    if (mode === "filter") {
      setMode("add");
    } else {
      setMode("filter");
    }
  };

  // edit todo
  const editTodo = (todo) => {
    setMode('edit');
    setActivTodo(todo);
  };

  let currentFilter = [...todos];
  if (mode === "filter") {
    currentFilter = todos.filter((t) => !t.done);
  }
  if (mode === "edit" && activTodo) {
    currentFilter = [activTodo];
  }

  setToLocalStorage();
  return (
    <main>
      <div className="container">
        <div className="todos">
          <TodosForm
            addTodo={addTodo}
            toggleFilter={toggleFilter}
            mode={mode}
            activTodo={activTodo}
          />
          <Todos
            todos={currentFilter}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            mode={mode}
          />
        </div>
      </div>
    </main>
  );
}

export default TodoList;
