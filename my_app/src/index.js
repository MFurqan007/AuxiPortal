import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import 'material-icons/iconfont/material-icons.css';
import { configureStore } from '@reduxjs/toolkit';
import FuncReducer from "./Reducer.js"

//Redux Store Initialisation
const myStore = configureStore({reducer: FuncReducer}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
myStore.subscribe(()=>{
    console.log("Store changed!",myStore.getState());
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={myStore}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
