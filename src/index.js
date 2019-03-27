import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'

const title = 'My Minimal React Webpack Babel Setup is ready';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();