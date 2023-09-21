import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Donation from './views/donation.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './views/details.jsx'
import Error from './components/error-page.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/donation" element={<Donation />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>,
)