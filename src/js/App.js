import '../css/application.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes';
import $ from 'jquery';
import { combineReducers, createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import history from './helpers/history';
import ReduxPromise from 'redux-promise';
import currentUser from './reducers/currentUser';
import createUserSubscriber from './helpers/createUserSubscriber';
import syncCurrentUserFromLocalStorage from './helpers/syncCurrentUserFromLocalStorage';
import users from './reducers/users';
import messages from './reducers/messages';

const reduxApp = combineReducers({
  form: formReducer,
  currentUser: currentUser,
  users: users,
  messages: messages
});

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reduxApp);

const dispatch = (action) => {
  store.dispatch(action);
};

const render = () => {
  ReactDOM.render(
    <Provider store={store}><Router history={history}>{routes}</Router></Provider>,
    document.getElementById("app")
  );
};

$(function() {
  render();
  store.subscribe(render);
  store.subscribe(createUserSubscriber(store.getState));
  syncCurrentUserFromLocalStorage(store.dispatch);
});
