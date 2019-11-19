import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Home from './pages/Home';

import './index.css';

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
            <Home />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
