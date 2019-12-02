import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Join from './pages/Join';
import Services from './pages/Services';
import Donate from './pages/Donate';

import './index.css';

function App() {
    const navItems = [
        { url: '/#events', copy: 'Events' },
        { url: '/about', copy: 'About' },
        { url: '/services', copy: 'Services' },
        { url: '/join', copy: 'Join' }
    ];

    return (
        <div className="App">
            <Header navItems={navItems} />
            <BrowserRouter>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/join" component={Join} />
                    <Route path="/services" component={Services} />
                    <Route path="/donate" component={Donate} />
                    <Route path="/contact" component={Services} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
            <Footer navItems={navItems} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
