import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const state1 = useSelector((state) => state.state1);
  const state2 = useSelector((state) => state.state2);

  const dispatch = useDispatch();
  // const inputHandler = (e) => {
  //   e.preventDefault();
  //   let data = e.target.value;
  // };
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) =>
            dispatch({ type: "Item is added", EVENT: e.target.value })
          }
        ></input>
        <button onClick={() => dispatch({ type: "newToDo" })}>
          Add new task
        </button>
      </div>

      <button onClick={() => dispatch({ type: "ADD_ITEM" })}>+</button>
      <button onClick={() => dispatch({ type: "DELETE_ITEM" })}>-</button>
      {state1}
    </div>
  );
}

export default App;
