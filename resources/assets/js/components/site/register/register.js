import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import * as config from '../../config/config';
import { Redirect } from 'react-router'

export default class Register extends Component {

    constructor() {
        super();
        let validationData = {
            first_name : '',
            last_name : '',
            email : '',
            password : '',
            password2 : ''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            'validationData': validationData,
            'isLogged' : false,
            'accountType' : 1 
        }
    }
    onSubmit(e) {
        e.preventDefault();
        console.log(this.refs.accountType.value,'xxxx');
        const postData = {
            email: this.refs.email.value,
            first_name: this.refs.first_name.value,
            last_name: this.refs.last_name.value,
            password: this.refs.password.value,
            password2: this.refs.password2.value,
            account_type : this.state.accountType
        };
        axios.post(config.URL + 'api/users', postData)
            .then(response => {
                console.log(response.data.status, 'status');
                let responseData = response.data;
                if (responseData.status == config.successStatusCode) {
                    localStorage.setItem("JWT-token", responseData.data.original.data.token);
                    this.setState({ 'isLogged': true});
                    <Redirect to='/'/>
                } else if (responseData.status == config.validationFailStatusCode) {
                    this.setState({ 'validationData': responseData.data });
                } else {
                    this.setState({ 'validationData': validationData });
                }
            })
    }
    
    setAcountTypeState(e){
        console.log(e.target.value,'xxxx');
        this.setState({ 'accountType': e.target.value });
    }
    render() {
        let registrationHtml = <div id="page-content">
            <div className="container">
                <ol className="breadcrumb">
                    <li><a href="#">Početna</a></li>
                    <li className="active">Kreiraj Nalog</li>
                </ol>
            </div>
            <div className="container">
                <header><h1>Kreiraj Nalog</h1></header>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                        <h3>Vrsta Nalogaxxxxs</h3>
                        <form role="form" id="form-create-account" method="post" onSubmit={this.onSubmit}>
                        <div onChange = {this.setAcountTypeState.bind(this)} >    
                        <div className="radio" id="create-account-user">
                                <label>
                                    <input  type="radio" id="account-type-user" name="account-type" ref="accountType" value='1' checked="checked"/>Običan korisnik
                                                    </label>
                            </div>
                            <div className="radio" id="agent-switch" data-agent-state="">
                                <label>
                                    <input  type="radio" id="account-type-agent" name="account-type" ref="accountType" value='2'/>Agencija
                                                    </label>
                            </div>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label for="form-create-account-first-name">Ime: </label><span className="text-danger"> {this.state.validationData.first_name}</span>
                                <input type="text" className="form-control" id="form-create-account-first-name" ref="first_name" />
                            </div>
                            <div className="form-group">
                                <label for="form-create-account-last-name">Prezime: </label><span className="text-danger"> {this.state.validationData.last_name}</span>
                                <input type="text" className="form-control" id="form-create-account-last-name" ref="last_name" />
                            </div>
                            <div className="form-group">
                                <label for="form-create-account-email">Email: </label><span className="text-danger"> {this.state.validationData.email}</span>
                                <input type="text" className="form-control" id="form-create-account-email" ref="email" />
                            </div>
                            <div className="form-group">
                                <label for="form-create-account-password">Šifra: </label><span className="text-danger"> {this.state.validationData.password}</span>
                                <input type="password" className="form-control" id="form-create-account-password" ref="password" />
                            </div>
                            <div className="form-group">
                                <label for="form-create-account-confirm-password">Ponovi Šifru: </label><span className="text-danger"> {this.state.validationData.password2}</span>
                                <input type="password" className="form-control" id="form-create-account-confirm-password" ref="password2" />
                            </div>
                            <div className="checkbox pull-left">
                                <label>
                                    <input type="checkbox" id="account-type-newsletter" name="account-newsletter" ref="newsletter" />Prijavi se za obaveštenja
                                                    </label>
                            </div>
                            <div className="form-group clearfix">
                                <button type="submit" className="btn pull-right btn-default" id="account-submit">Napravi Nalog</button>
                            </div>
                        </form>
                        <hr />
                        <div className="center">
                            <figure className="note">kreiranjem naloga prihvatate opste uslove korisćenja <a href="terms-conditions.html">Opšti uslovi korišćenja</a></figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        return (
            this.state.isLogged ? <Redirect to='/' /> : registrationHtml
        );
    };
}