import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './site/main/home.js';
import Register from './site/register/register.js';
import Header from './site/main/header.js';
import Footer from './site/main/footer.js';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

export default class Root extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Home} exact={true}/>
                    <Route path="/register" component={Register} exact={true}/>
                 
                </Switch>
                <Footer/>
            </div>
          </BrowserRouter>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}


