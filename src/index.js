import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";
import {Provider} from "react-redux";
import store from "./store";
ReactDOM.render(
    <Provider store={store}>
          <Auth0Provider
            domain="dev-4eke6ze7.us.auth0.com"
            clientId="inaoKb4oKimC9yZGisATAgNRCjfdyN95"
            redirectUri={window.location.origin}
            audience="https://dev-4eke6ze7.us.auth0.com/api/v2/"
            scope="read:current_user update:current_user_metadata update:users update:users_app_metadata"
          >
              <App />
        </Auth0Provider>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
