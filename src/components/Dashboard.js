import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../css/components/dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-body">
          <Header />
          <h1>DASHBOARD</h1>
          <button className="create-project-btn"><Link to="/ideas" className="create-project-btn-link">Create New Project</Link></button>
      </div>
    );
  }
}

export default Dashboard;