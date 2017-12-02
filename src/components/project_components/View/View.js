import React, { Component } from 'react';
import Header from '../../Header/Header';
import Nav_Sidebar from '../Nav_Sidebar/Nav_Sidebar';
import './view.scss';

class View extends Component {
  render() {
    return (
      <div className="view-body">
          <Header />

          <div className="view-wrapper">
              <Nav_Sidebar />

              <div className="view-area">
                  <h1>View</h1>
                  <div className="view-input-one">
                        <h3>1.</h3>
                        <input placeholder="Name" className="view-input-name"/>
                        <input placeholder="Image URL" className="view-input-img-url"/>
                        <button>Save</button>
                  </div>
                  <div className="view-input-two">
                        <h3>2.</h3>
                        <input placeholder="Name" className="view-input-name"/>
                        <input placeholder="Image URL" className="view-input-img-url"/>
                        <button>Save</button>
                  </div>
                  <div className="view-add">
                      <a href="">+Add</a>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default View;