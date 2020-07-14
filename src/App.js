import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header.js';
import Issue from './components/Issue/Issue.js';
import Footer from './components/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Issue></Issue>
      <Footer></Footer>
    </div>
  );
}

export default App;
