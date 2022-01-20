// External dependencies
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Internal dependencies
import Router from './routes';
import { store } from './state/store';
import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div>Loading ...</div>}>
      <React.StrictMode>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
