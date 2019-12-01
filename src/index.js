import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import './index.css';

function App() {
    const navItems = [
        { url: '/#events', copy: 'Events' },
        { url: '/about', copy: 'About' },
        { url: '#', copy: 'Services' },
        { url: '#', copy: 'Join' }
    ];

    return (
        <div className="App">
            <Header navItems={navItems} />
            <BrowserRouter>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
