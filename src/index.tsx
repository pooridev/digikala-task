import React from 'react';
import ReactDOM from 'react-dom';

// External dependencies
import { BrowserRouter } from 'react-router-dom';

// Internal dependencies
import Router from './routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
