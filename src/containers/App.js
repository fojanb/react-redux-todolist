import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const state1 = useSelector((state) => state.state1);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <input onChange={inputHandler}></input>
      <button onClick={() => dispatch({ type: "ADD_ITEM" })}>ADD ITEM</button>
      <button onClick={() => dispatch({ type: "DELETE_ITEM" })}>DELETE ITEM</button>

      {state1}
    </div>
  );
}

export default App;
