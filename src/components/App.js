import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { incremet, decremet, login, logout } from '../actions'

function App() {

  const counter = useSelector((state) => state.counterReducer)
  const isLogged = useSelector((state) => state.isLoggedReducer)
  console.log(isLogged)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(incremet())}>+</button>
      <button onClick={() => dispatch(decremet())}>-</button>

      <button onClick={() => dispatch(login())}>Log in</button>
      <button onClick={() => dispatch(logout())}>Log out</button>
      {isLogged
        ? <h3>Valuable information that I shouldn't see</h3>
        : ''
      }
    </div>
  );
}

export default App;
