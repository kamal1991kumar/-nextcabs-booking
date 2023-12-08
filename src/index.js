import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import AppProvider from 'context/AppContext';
import './index.css';

const router = [{
  path: '/checkout',
  element: lazy(() => import('./pages/checkoutPage'))
},
{
  path: '/listing',
  element: lazy(() => import('./pages/listingPage'))
},
{
  path: '/',
  element: lazy(() => import('./pages/homePage'))
}];

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Suspense fallback={loading}>
        <HashRouter>
          <Routes>
            {router.map(i => <Route
              key={i.path}
              exact
              path={i.path}
              element={<i.element />}
            />)}
          </Routes>
        </HashRouter>
      </Suspense>
    </AppProvider>
  </React.StrictMode>
);

