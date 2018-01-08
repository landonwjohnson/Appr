import React, { Component } from 'react';
import './overview.scss';

class OverView extends Component {

  render() {
  

    return (
      <div className="overview-container">

            <div className="grid">
                <ul id="ideasandusers">
                    ideas and users
                </ul>
                <ul id="views">
                    views
                </ul>
                <ul id="features">
                    features
                </ul>
                <ul id="controllers"> 
                    controllers
                </ul>
                <ul id="endpoints"> 
                    endpoints
                </ul>
                <ul id="schema"> 
                    schema
                </ul>
                <ul id="tracker"> 
                    tracker
                </ul>
            </div>
      </div>
    );
  }
}

export default OverView;
