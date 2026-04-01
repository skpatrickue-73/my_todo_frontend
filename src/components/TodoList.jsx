import Todo from "./Todo";

const mock_data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

export default function TodoList({todoList}) {

  return (
    <>
      <p>Start List:</p>
      <ul>
      {todoList.map(t => <li key={t.id}><Todo taskData={t}/></li>)}
      </ul>
    </>
  );
}
