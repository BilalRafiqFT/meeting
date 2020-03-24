import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div>
            <NavMenu />
                <Container>
                    {this.props.children}
                </Container>

                <footer className="footer mt-auto py-3 bg-primary-color bottom-stick">
                            <div className="container">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="logo ">
                                            <img src="./images/meetup-logo (1).png" alt="" className="img-fluid w-50" />
                                                <p className="mt-4 mb-0">Address: 22382 Avenida Empresa
                                                    Rancho Santa Margarita, CA 92688</p>
                                                <p className="mb-0">Contact: 1-800-635-4772</p>
                                                <p className="mb-0">Email: info@meetup.com</p>
                                        </div>
                                        </div>
                                        <div className="col-4 d-flex align-items-center">
                                            <div className="vertical-nav">
                                                <ul>
                                                    <li><a href="">Home</a></li>
                                                    <li><a href="">Counter</a></li>
                                                    <li><a href="">Fetch Data</a></li>
                                                    <li><a href="">Login</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-4 d-flex align-items-center">
                                            <div className="vertical-nav">
                                                <ul>
                                                    <li><a href="">Help</a></li>
                                                    <li><a href="">Privacy Policy</a></li>
                                                    <li><a href="">Terms and Conditions</a></li>
                                                    <li><a href="">Contact</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            </footer>
            </div>
    );
  }
}
