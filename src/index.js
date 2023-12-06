import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/homePage'
import ListingPage from './pages/listingPage'
import { HashRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/listing' exact element={<ListingPage />} />
        <Route path='/' exact element={<HomePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

