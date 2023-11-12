import { useState } from "react";
import "./index.css";
import AllTodos from "./components/AllTodos";
import ActiveTodos from "./components/ActiveTodos";
import Completed from "./components/Completed";
function App() {
  const [active, setActive] = useState("all");
  return (
    <div className="App font-sans w-screen text-center  ">
      <div className=" flex-col justify-start items-center w-screen mt-4">
        <h1 className="text-4xl py-1 font-bold ">#todo</h1>
        <div className="flex justify-center gap-24 mt-12 text-lg">
          <div className="w-24">
            <div onClick={() => setActive("all")}>All</div>
            {active === "all" && (
              <div className="bg-blue-600 w-24  mt-1 h-1 text-base rounded-t-2xl "></div>
            )}
          </div>
          <div className="w-24">
            <div onClick={() => setActive("active")}>Active</div>
            {active === "active" && (
              <div className="bg-blue-600 w-24  mt-1 h-1 text-base rounded-t-2xl "></div>
            )}
          </div>
          <div className="w-24">
            <div onClick={() => setActive("completed")}>Completed</div>
            {active === "completed" && (
              <div className="bg-blue-600 w-24  mt-1 h-1 text-base rounded-t-2xl "></div>
            )}
          </div>
        </div>
        <hr className="w-2/5 mx-auto" />
        <div className="flex-col w-screen items-center justify-start">
          {active === "all" && <AllTodos />}
          {active === "active" && <ActiveTodos />}
          {active === "completed" && <Completed />}
        </div>
      </div>
    </div>
  );
}

export default App;
