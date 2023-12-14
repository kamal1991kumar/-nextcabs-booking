import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import AppProvider from 'context/AppContext';
import './index.css';
const HomePage = lazy(() => import('./pages/homePage'));
const ListingPage = lazy(() => import('./pages/listingPage'));
const CheckoutPage = lazy(() => import('./pages/checkoutPage'));
const PaymentSuccess = lazy(() => import('./pages/paymentPage/PaymentSuccess'));
const PaymentError = lazy(() => import('./pages/paymentPage/PaymentError'));

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
            <Route path='/payment-success' element={<PaymentSuccess />} />
            <Route path='/payment-error' element={<PaymentError />} />
            <Route path='/listing' element={<ListingPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </AppProvider>
  </React.StrictMode>
);

