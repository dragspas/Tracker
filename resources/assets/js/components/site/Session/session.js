import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const Session = (userData) => {
    axios.post(config.URL + 'api/users', userData)
    .then(response => {
        let responseData = response.data;
        if (responseData.status == config.successStatusCode) {
            this.setState({'isLogged': true });
        } else if (responseData.status == config.validationFailStatusCode) {
            this.setState({ 'validationData': responseData.data });
        } else {
            this.setState({ 'validationData': validationData });
        }
    })
}

export default Session;