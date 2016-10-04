import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { Provider } from 'react-redux';

import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('root')
)
