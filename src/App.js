import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
