import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reducer from './Reducers';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers';
//import thunk from 'redux-thunk'; 
// applyMiddleware

ReactDOM.render(
    <Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
        <App />
    </Provider>,
    document.getElementById("root")
);




//ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <Provider store={createStore(reducer)}>
//      <App />
//   </Provider>,
//   document.getElementById('root')
// );
