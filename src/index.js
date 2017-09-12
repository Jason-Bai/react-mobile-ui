import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import Root from './containers/Root'
import configureStore from './store'
import registerServiceWorker from './utils/registerServiceWorker';

const store = configureStore()
const rootDoc = document.getElementById('root');

render(
  <Router>
    <Root store={store} />
  </Router>,
  rootDoc,
)

registerServiceWorker();
