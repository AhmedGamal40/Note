import React, {useEffect, useState } from "react";
import FeatherIcon from 'feather-icons-react';

function TodosForm({ addTodo, toggleFilter, mode, activTodo }) {
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (mode === "edit") {
      setTitle(activTodo.title || "");
    }
  }, [activTodo , mode]);

  // handel title in input
  const handelChange = (e) => {
    setTitle(e.target.value);
  };

  const handelSubmit = () => {
    if (!title.trim()) {
      return;
    }
    addTodo(title);
    setTitle('');
  };
  return (
    <div className="todos-form">
        <div
          className={`todos-form_icon ${mode === "filter" ? "active" : ""}`}
          onClick={toggleFilter}
        >
          <FeatherIcon icon="circle" />
        </div>
      <div className="todos-form_form">
        <input
          type="text"
          placeholder="أضف مهام جديده ...."
          onChange={handelChange}
          value={title}
        />
      </div>
      <div className="todos-form_submit">
        <button className="btn" disabled={!title.trim()} onClick={handelSubmit}>
          {mode === "edit" ? "تعديل ..." : "اضافة"}
        </button>
      </div>
    </div>
  );
}

export default TodosForm;
