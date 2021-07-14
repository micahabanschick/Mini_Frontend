import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, /* applyMiddleware, compose */} from 'redux'
// import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import usersReducer from './reducers/usersReducer'

import App from './App';

const rootReducer = combineReducers({
  user: usersReducer,
  // project: projectsReducer,
  // work: worksReducer,
})

const store = createStore(
  rootReducer, 
  // initialState,
  // compose(
  //   applyMiddleware(thunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);