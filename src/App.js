import React from 'react';
import Welcome from './components/js/Welcome';
import Header from './components/js/Header';
import Article from './components/js/Article';

import './App.css';

function App() {
  return (
    <main className="app">
      <Welcome />
      <Header />
      <Article />
    </main>
  );
}

export default App;
