import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header2 extends React.Component {
  render() {
    return (
      <>
        <header>

          <Navbar collapseOnSelect expand="lg" fixed="top" className='custom-dark-green-background custom-header'>
            <div class="container-fluid">

              <div class="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <h3 className='custom-light-green-text custom-dark-green-background'>Josiah Pressure Washing</h3>
              </div>

              <div className="collapse navbar-collapse" id="myNavbar">
                <NavItem><Link to="/Services" className="nav-link custom-light-green-text">Services</Link></NavItem>
                <NavItem><Link to="/ServicesCards" className="nav-link custom-light-green-text">Services - Cards</Link></NavItem>
                <NavItem><Link to="/Gallery" className="nav-link custom-light-green-text">Gallery</Link></NavItem>
                <NavItem><Link to="/Contact" className="nav-link custom-light-green-text">Contact</Link></NavItem>
              </div>
            </div>
          </Navbar>
        </header>
        
        {/* 
        <header>
          <Navbar collapseOnSelect expand="lg" fixed="top" className='custom-dark-green-background custom-header'>
            <h3 className='custom-light-green-text custom-dark-green-background'>Josiah Pressure Washing</h3>
            <NavItem><Link to="/Services" className="nav-link custom-light-green-text">Services</Link></NavItem>
            <NavItem><Link to="/ServicesCards" className="nav-link custom-light-green-text">Services - Cards</Link></NavItem>
            <NavItem><Link to="/Gallery" className="nav-link custom-light-green-text">Gallery</Link></NavItem>
            <NavItem><Link to="/Contact" className="nav-link custom-light-green-text">Contact</Link></NavItem>
          </Navbar>
        </header> */}
      </>
    );
  }
}

export default Header2;