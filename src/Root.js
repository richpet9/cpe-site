import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';

function App() {
  const navItems = [
    { url: '#', copy: 'Events' },
    { url: '#', copy: 'About' },
    { url: '#', copy: 'Services' },
    { url: '#', copy: 'Join' }
  ];

  return (
    <div className="App">
      <Header navItems={navItems} />
      <Hero />
      <Home />
    </div>
  );
}

export default App;
