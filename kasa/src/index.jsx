import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Error from './components/Error'
import APropos from './pages/APropos'
import './scss/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/A Propos" element={<APropos />} />
            <Route path="*" element={<Error />} />
          </Routes>
        <Footer />
      </Router>
    </React.StrictMode>,
  )
