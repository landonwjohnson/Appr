import React, { Component } from 'react';
import router from '../../router';
import './body.scss';
import Header from '../Header/Header';

export default class Body extends Component {
  render() {
    return (
      <div className="body-container">
        <Header location={this.props.location} />
        { router }
      </div>
    );
  }
}
