import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const state1 = useSelector((state) => state.state1);
  const dispatch = useDispatch();
  const addNewTask = () => {
    let newTask = document.createElement("div");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerText="✘"
    newTask.classList.add("task");
    newTask.innerText = state1;
    newTask.insertAdjacentElement("beforeend",deleteBtn);
    document.querySelector(".tasks").appendChild(newTask);
  };
  return (
    <div className="App">
      <h2><span>✎</span> My To-Do-List</h2>
      <div className="wrapper">
        <input
          className="bar"
          onChange={(e) =>
            dispatch({ type: "NEW_ITEM", EVENT: e.target.value })
          }
        ></input>
        <button className="addBtn" onClick={addNewTask}>
          Add
        </button>
      </div>
      <div className="tasks"></div>
    </div>
  );
}
export default App;
