import React, { Component } from 'react';
import { Carriers } from './Carriers';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import { FaWrench } from 'react-icons/fa'
import { BsFillDropletFill } from 'react-icons/bs'
import { FiBox } from 'react-icons/fi'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            carriers: [],
        };
    }   
    loadDataFromServer() {
        fetch('api/CarrierDesignation')
            .then((response) => response.json())
            .then(carrierData => {
                this.setState({ carriers: carrierData, isLoaded: true });
            });
    }
    componentDidMount() {
        this.loadDataFromServer();
        this.timer = setInterval(() => this.loadDataFromServer(), 5000);
    }
    render() {       
        if (this.state.isLoaded && this.state.carriers.length) {
            return (
                <Carriers {...this.state} />
            );
        }
        else {
            return (
                <div>
                    <h1>Looking for Carriers...</h1>
                </div>
            );
        }   
    }
}
