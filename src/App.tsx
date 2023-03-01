import React from 'react';
import Card from './components/Cards/Card';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
