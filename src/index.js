import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { Router, Route,IndexRoute, Link, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import Main from './container/Main';
import Filter from './container/filters';

require('../style/style.scss');

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Filter} />
      </Route>
    </Router>
  </Provider>), document.querySelector('.app'));




















