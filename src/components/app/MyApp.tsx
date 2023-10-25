import mc from "./my-app.module.scss"
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter } from '../../redux/counterReducer'; 
import { RootState } from '../../redux/rootReducer';
import { useMemo } from 'react';
//components//
import Home from "../home/Home";

const MyApp = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state: RootState) => state.counter);
  const { value } = useMemo(() => counter, [counter]);

  return (
    <div className={mc.container}>
      {/* <h1>Mirage Beauty Lab</h1>
      <h2>Counter: {value}</h2>
      <button onClick={() => dispatch(decrementCounter())}>moins</button>
      <button onClick={() => dispatch(incrementCounter())}>plus</button> */}
      <Home/>
    </div>
  );
}

export default MyApp;