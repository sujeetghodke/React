import { useState } from "react";
import Box from "./components/Box";
import Input from "./components/Input";

function App() {
  const [todo, setTodo] = useState([]);
  const removeTodo = (id) => {
    // console.log(id);
    const newTodos = todo.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setTodo(newTodos);
  };
  const addTodoHandler = (item) => {
    // console.log(items);
    setTodo([
      ...todo,
      {
        item,
        time: new Date().toLocaleTimeString(),
      },
    ]);
  };
  // console.log(todo);
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-screen p-4">
      <div className="bg-white mx-auto max-w-[650px] min-h-[180px] shadow-2xl rounded-lg">
        <h1 className="text-2xl ml-4 p-3 text-slate-700 font-bold">
          To-Do-List
        </h1>
        <Input handler={addTodoHandler} />
        <Box data={todo} removeHandler={removeTodo} />
      </div>
    </div>
  );
}

export default App;
