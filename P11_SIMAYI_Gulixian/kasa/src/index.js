import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Apropos from './pages/Apropos/Apropos';
import Footer from'./components/Footer/Footer'
import Error from './pages/Page404/Error';
import Logement from './pages/Logement/Logement';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='*' element={<Error />} />
              <Route path='/apropos' element={<Apropos />} />
              <Route path='/logement/:id' element={<Logement />} />
          </Routes>
          <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
