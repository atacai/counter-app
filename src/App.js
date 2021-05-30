import { Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { counterActions } from "./store/counter";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const numIncreaseRef = useRef(0);
  const numDecreaseRef = useRef(0);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    if (!numIncreaseRef.current.value) return;
    dispatch(
      counterActions.increase({
        increaseValue: parseInt(numIncreaseRef.current.value),
      })
    );
  };

  const decreaseHandler = () => {
    if (!numDecreaseRef.current.value) return;
    dispatch(
      counterActions.decrease({
        decreaseValue: parseInt(numDecreaseRef.current.value),
      })
    );
  };

  return (
    <Fragment>
      <h1>{counter}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase</button>
      <input type="number" ref={numIncreaseRef} />
      <button onClick={decreaseHandler}>Decrease</button>
      <input type="number" ref={numDecreaseRef} />
    </Fragment>
  );
}

export default App;
