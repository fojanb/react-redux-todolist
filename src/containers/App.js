import "./App.css";
import { useSelector, useDispatch } from "react-redux";
function App() {
  const state1 = useSelector((state) => state.state1);
  const state2 = useSelector((state) => state.state2);
  const dispatch = useDispatch();
  const addNewTask = () => {
    console.log(state2);
  };
  return (
    <div className="App">
      <div>
        <input
          onChange={(e) =>
            dispatch({ type: "NEW_ITEM", EVENT: e.target.value })
          }
        ></input>
        <button onClick={addNewTask}>Add new task</button>
        <div className="tasks"></div>
      </div>

      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      {state1}
    </div>
  );
}
export default App;
