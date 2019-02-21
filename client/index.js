import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'toastr/build/toastr.css';
import Cookie from 'cookies-js';
import rootReducer from '../client/reducers/rootReducer'
import App from './components/App.jsx';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/loginAction';

setAuthorizationToken();

const token = Cookie.get('jwtToken');

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

if (token) {
  store.dispatch(setCurrentUser(token));
  setAuthorizationToken(token);
}



ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')

)