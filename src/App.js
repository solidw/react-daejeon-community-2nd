import React from 'react';

import Header from './components/Header';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <main className="contents">
        <Home />
      </main>
    </>
  );
}

export default App;
