import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";
import InputAdd from "./InputAdd";

function AllTodos() {
  const dispatch = useDispatch();
  const { todos, completedTodos } = useSelector((state) => state.todos);
  return (
    <>
      <InputAdd />
      {todos.map((todo) => (
        <>
          <div className="flex w-1/3  mx-auto p-3 gap-2 text-lg " key={todo.id}>
            <input
              type="checkbox"
              className="bg-blue-600 w-4 h-5 self-center rounded-lg"
              onChange={() => dispatch(removeTodo(todo.id))}
            />
            <div>{todo.content}</div>
          </div>
        </>
      ))}

      {completedTodos.map((todo) => (
        <>
          <div className="flex w-1/3  mx-auto p-3 gap-2 text-lg " key={todo.id}>
            <input
              type="checkbox"
              className="bg-blue-600 w-4 h-5 self-center rounded-lg"
              checked
            />
            <s>{todo.content}</s>
          </div>
        </>
      ))}
    </>
  );
}

export default AllTodos;
