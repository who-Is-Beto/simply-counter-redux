import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'

//STORE => GLOBALIZED


//ACTIONS (DESCRIBE)

const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

const decremet = () => {
  return {
    type: 'DECREMENT',
  }
}

//REDUCER

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;


    default:
      return state
  }
}

//DISPLAY IT IN THE CONSOLE
let store = createStore(counter)
store.subscribe(() => console.log(store.getState()))
//DISPATCH
store.dispatch(increment())
store.dispatch(decremet())
store.dispatch(decremet())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
