import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import './NavMenu.css';
import MagnaLogo from './MagnaLogo.png';
import Nav from 'react-bootstrap/Nav'

export class NavMenu extends Component {
  constructor (props) {
    super(props);
  }
  render () {
      return (     
          <header>            
                <Navbar>
                    <Navbar.Brand href="#home" className="mr-auto" >
                        <img
                            src={MagnaLogo}
                            width="220"
                            height="55"
                            className="d-inline-block align-top"
                            alt="Magna logo"
                        />
                    </Navbar.Brand>               
                    <Nav>
                        <h1>Back Track Carrier Designation</h1>
                    </Nav>
                </Navbar>
          </header>
    );
  }
}
