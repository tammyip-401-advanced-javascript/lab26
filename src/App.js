import React from 'react';
import "./styles.scss";
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <ToDo />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;