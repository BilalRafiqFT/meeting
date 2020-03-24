import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'
import { render } from 'react-dom';
import _ from 'lodash';

export class Home extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = { appointments: [], forecasts: [], loading: true, token: '', userName: localStorage.getItem('username') };
    }

    componentDidMount() {
         this.populateAppointmentsData();
     }

    static renderAppointmentsTable(appointments,url) {
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Patient Name</th>
                    <th>Gender</th>
                    <th>Age</th>
                    <th>Reason</th>
                    <th>Appointment Date</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment =>
                    <tr key={appointment.appointmentId}>
                        <td>{appointment.name}</td>
                        <td>{appointment.gender}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.reason}</td>
                        <td>{appointment.appointmentDateTime}</td>
                        <td>{appointment.status}</td>
                        <td><a href={url} className="btn btn-primary">Connect</a></td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
render() {
    const { clientId, callFrom, callModal, callWindow, localSrc, peerSrc } = this.state;
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Home.renderAppointmentsTable(this.state.appointments, 'http://localhost:9000/?doctor='+this.state.userName+'&patient=rehan');

    return (
        <div>
            <div class="table-heading text-center my-3">
                <h3 class="primary-color">Appointments</h3>
                <p class="m-0">All Appointments</p>
            
            </div>
            <div class="table-section">
                {contents}
            </div>
        </div>
    );
}

async populateAppointmentsData() {
    const token = await authService.getAccessToken();
    const response = await fetch('api/Appointments', {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
    });
    const data = await response.json();
    console.log(data);
    this.setState({ appointments: data, loading: false, token: token });
}
    
}
