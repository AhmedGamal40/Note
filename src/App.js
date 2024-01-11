import { useEffect, useState } from 'react';
import './Assets/Style/index.css'
import Header from './Components/Todos/Header.jsx';
import TodoList from './Views/TodoList.jsx'

function App() {
   const [count , setCount] = useState(0)
  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem("todos")).length);
  },[setCount]);
  return (
    <div className="App">
      <Header count={count}/>
      <TodoList />
    </div>
  );
}

export default App;
