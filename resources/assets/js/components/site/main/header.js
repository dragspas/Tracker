import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav.js';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

export default class Footer extends Component {
    render() {
       let registerText = 111 ? 'Registruj se' : '';
       let signInText   = 111 ? 'Odjavi se' : 'Uloguj se';
        return (       
            <div className="navigation">
                <div className="secondary-navigation">
                    <div className="container">
                        <div className="contact">
                            <figure><strong>Telefon:</strong>+1 810-991-3842</figure>
                            <figure><strong>Email:</strong>topli-dom@office.com</figure>
                        </div>
                        <div className="user-area">
                            <div className="actions">
                                <a href="create-agency.html" className="promoted">Kreiraj agenciju</a>
                                <NavLink to="/register" activeClassName="is-active"  exact={true}><strong>registerText</strong></NavLink> 
                                <a href="sign-in.html">signInText</a>
                            </div>
                            <div className="language-bar">
                                <a href="#" className="active"><img src="assets/img/flags/gb.png" alt="" /></a>
                                <a href="#"><img src="assets/img/flags/de.png" alt="" /></a>
                                <a href="#"><img src="assets/img/flags/es.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <header className="navbar" id="top" role="banner">
                        <div className="navbar-header">
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="navbar-brand nav" id="brand">
                                <h1>Vaš novi topli dom</h1>
                            </div>
                        </div>
                        <Nav />
                        <div className="add-your-property">
                            <a href="submit.html" className="btn btn-default"><i className="fa fa-plus"></i><span className="text">Add Your Property</span></a>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}