import { useDispatch, useSelector } from "react-redux";
import { removeCompleted, removeEverything } from "../features/todoSlice";
import { MdDelete } from "react-icons/md";

function Completed() {
  const { completedTodos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      {completedTodos.length > 0 &&
        completedTodos.map((todo) => (
          <>
            <div
              className="flex w-1/3  mx-auto p-3 gap-2 text-lg "
              key={todo.id}
            >
              <input
                type="checkbox"
                className="bg-blue-600 w-4 h-5 self-center rounded-lg"
                checked
              />
              <div className="flex justify-between w-full py-3">
                <s>{todo.content}</s>
                <div
                  className="self-center"
                  onClick={() => dispatch(removeCompleted(todo.id))}
                >
                  <MdDelete className="text-slate-600 " size="1.4rem" />
                </div>
              </div>
            </div>
          </>
        ))}
      {completedTodos.length > 0 && (
        <div className="w-1/3 flex justify-end mx-auto">
          <button
            className="bg-red-600 text-white py-2 px-3 rounded-lg"
            onClick={() => dispatch(removeEverything())}
          >
            delete all{" "}
          </button>
        </div>
      )}
    </>
  );
}

export default Completed;
