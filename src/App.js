import React from 'react';
import Header from './components/Header/Header.js';
import Issue from './components/Issue/Issue.js';
import Footer from './components/Footer/Footer.js';
import Loader from './components/Loader/Loader.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Loader></Loader>
      <Header></Header>
      <Issue></Issue>
      <Footer></Footer>
    </div>
  );
}

export default App;
