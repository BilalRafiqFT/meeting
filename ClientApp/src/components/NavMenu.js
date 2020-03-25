import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
      return (
          <div className="container-fluid px-0">
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <a className="navbar-brand" href="#"><img src="./images/meetup-logo (1).png" alt="im-fluid" className="w-75" />
                          </a>
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                              <div className="navbar-nav">
                          <NavLink className="nav-item nav-link active" tag={Link} to="/">Home <span className="sr-only">(current)</span></NavLink>
                          <LoginMenu>
                          </LoginMenu>
                              </div>
                          </div>
                  </nav>
        </div>
      
    );
  }
}
