// External dependencies
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Internal dependencies
import Router from './routes';
import { store } from './state/store';

import './styles/main.scss';
import 'react-medium-image-zoom/dist/styles.css';
import MainLayout from './layouts/MainLayout';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<></>}>
      <React.StrictMode>
        <BrowserRouter>
          <MainLayout>
            <Router />
          </MainLayout>
        </BrowserRouter>
      </React.StrictMode>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);
