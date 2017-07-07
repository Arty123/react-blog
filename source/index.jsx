// Dependencies
import React from 'react';

import { createStore } from	'redux';
import { Provider } from 'react-redux';
// import configureStore from './store/configureStore.jsx'
import ReactDOM from 'react-dom';

// Eeducer
import reducer from './reducers/index.js'

// Initial state
const initState = {
    posts: ['Post 1', 'Post 2', 'Post 3', 'Post 4'],
}

// Store
const store = createStore(reducer, initState);

// Components
import App from './components/app/App.jsx';

// Styles
import 'normalize.css';
import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('main'));
