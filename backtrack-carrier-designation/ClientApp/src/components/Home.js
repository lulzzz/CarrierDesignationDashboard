import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

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
       
        if (this.state.isLoaded) {
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
                    style={{ width: '18rem' }}
                    className="m-2"
                    bg={cardColor(carrier.destination)}
                >
                    <Card.Header>{carrier.carrierNumber}</Card.Header>
                    <Card.Header>{carrier.destination}</Card.Header>
                    <Card.Body>                     
                        <Card.Text>
                            <p><b>style:</b> {carrier.styleDescription}</p>
                            <p><b>color:</b> {carrier.colorDescription}</p>
                        </Card.Text>
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
            break;
        case 'Clean':
            return ("warning");
            break;
        default:
            return ("secondary");
    }
}