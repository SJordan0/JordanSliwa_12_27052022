import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import GlobalStyle from './utils/style/GlobalStyle'
import Header from './components/Header';
import Aside from './components/Aside';
import Home from './Pages/Home';
import ProfilPage from './Pages/UserPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProfilPage" element={<ProfilPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);