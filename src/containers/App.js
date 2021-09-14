import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const state1 = useSelector((state) => state.state1);
  const dispatch = useDispatch();
  const addNewTask = () => {
    let newTask = document.createElement("div");
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerText = "Remove";
    // removeBtn.addEventListener("click", dispatch({ type: "REMOVE_ITEM" }));
    newTask.classList.add("task");
    newTask.innerText = state1;
    newTask.insertAdjacentElement("beforeend", removeBtn);
    document.querySelector(".tasks").appendChild(newTask);
  };
  return (
    <div className="App">
      <h2>
        <span>✎</span> My To-Do-List
      </h2>
      <div className="wrapper">
        <input
          value={state1}
          className="bar"
          onChange={(e) => dispatch({ type: "ADD_ITEM", DATA: e.target.value })}
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
