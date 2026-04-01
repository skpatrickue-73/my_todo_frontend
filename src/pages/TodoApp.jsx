import InputSection from "../components/InputSection";
import TodoList from "../components/TodoList";
import { useEffect, useState } from "react";

const mock_url = "https://jsonplaceholder.typicode.com/todos";

export default function TodoApp() {

  const [ todoData, setTodoData ] = useState(null)

  useEffect(() => {
    async function fetchTodoList(url) {
      const data = await fetch(url);
      const todoList = await data.json();
      setTodoData(todoList)
    }
    fetchTodoList(mock_url);
  }, []);

  return (
    <div>
      <InputSection />
      {todoData && <TodoList todoList={todoData} />}
    </div>
  );
}
