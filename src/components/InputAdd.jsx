import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { nanoid } from "nanoid";

function InputAdd() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addFunc = () => {
    if (input.trim() !== "") {
      dispatch(addTodo({ id: nanoid(), content: input }));
      setInput("");
    }
  };
  return (
    <>
      <div className=" py-4">
        <input
          type="text"
          className="outline-none px-4 py-3 w-1/4 border-2 bborder-stone-600 text-sm rounded-md"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="add details "
        />
        <button
          className=" p-3 ml-4 w-28 rounded-md text-white text-sm bg-blue-600 "
          onClick={addFunc}
        >
          Add
        </button>
      </div>
    </>
  );
}

export default InputAdd;
