import React, { Component } from 'react';
import router from '../../router';
import './body.scss';

export default class Body extends Component {
  render() {
    return (
      <div className="body-container">
        { router }
      </div>
    );
  }
}
