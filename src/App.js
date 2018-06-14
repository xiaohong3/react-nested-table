import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DetailForm1.css';
import AnalyticsPage from './AnalyticsPage';
import { Switch, Link, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="App container">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Welcome
                    </h1>
                    <ul className="nav">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/analytics'>Analytics</Link></li>
                    </ul>
                </header>
                <Switch>
                    <Route path='/analytics' component={AnalyticsPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;
