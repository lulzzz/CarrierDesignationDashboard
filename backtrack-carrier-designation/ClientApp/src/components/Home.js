import React, { Component } from 'react';
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
function Carriers(props) {
    return (
        <Row>   
            {props.carriers.map(carrier =>
                <Card
                    key={carrier.carrierNumber}
                    style={{ width: '20rem' }}
                    className="m-2 "
                    bg={cardColor(carrier.destination)}                   
                >
                    <Card.Header >#{carrier.carrierNumber}</Card.Header>                   
                    <Card.Body> 
                        <Card.Title>
                            <h3>{icon(carrier.destination)}  {carrier.destination}</h3>                                                
                        </Card.Title>
                        <hr />
                        <Card.Text><b>Top Rounds: </b>{carrier.topCount}/{carrier.topLimit}</Card.Text>
                        <Card.Text><b>Bottom Rounds: </b>{carrier.bottomCount}/{carrier.bottomLimit}</Card.Text>
                        <hr />
                        <Card.Text><b>Style: </b>{carrier.styleDescription}</Card.Text>
                        <Card.Text><b>Color: </b>{carrier.colorDescription}</Card.Text>
                    </Card.Body>
                    <Card.Footer >Scanned at {new Date(carrier.timeScanned).toLocaleTimeString()}</Card.Footer>
                </Card>  
             )}
        </Row>
    )
}
function cardColor(destination) {
    switch (destination) {
        case 'Repair':
            return("danger");
        case 'Clean':
            return ("warning");
        default:
            return ("secondary");
    }
}
function icon(destination) {
    switch (destination) {
        case 'Repair':
            return (<FaWrench />);
        case 'Clean':
            return (<BsFillDropletFill />);
        default:
            return (<FiBox />);
    }
}