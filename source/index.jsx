// Dependencies
import React from 'react';

import { createStore } from	'redux';
import { Provider } from 'react-redux';
// import configureStore from './store/configureStore.jsx'
import ReactDOM from 'react-dom';

// Store
// const store = configureStore();

// Components
import App from './components/app/App.jsx';

// Styles
import 'normalize.css';
import './index.scss';


ReactDOM.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('main'));