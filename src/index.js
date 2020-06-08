import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './css/bootstrap.css';
import './css/styles.css';
import logo from './logo.svg';
import './App.css'

ReactDOM.render (<App/>
, document.getElementById ('root')
);

serviceWorker.unregister();
