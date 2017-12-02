import React, { Component } from 'react';
import Header from '../../Header/Header';
import Nav_Sidebar from '../Nav_Sidebar/Nav_Sidebar';
import './view.scss';

class View extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
      <div className="view-container">
        < Header />
        <div className="view-inner-con">
          <div className="view-top-label">
            <h1 className="project-label-name">View</h1>
              <div className="view-input-con">
                <div className="view-input-individual">
                  <label className="view-num-individual">1.</label>
                    <input className="view-input-name" placeholder="Name" type="text" />
                    <input className="view-input-imgurl" placeholder="Image URL" type="text" />
                    <button className="button">Save</button>
                </div>
                <div className="view-input-individual">
                  <label className="view-num-individual">2.</label>
                    <input className="view-input-name" placeholder="Name" type="text" />
                    <input className="view-input-imgurl" placeholder="Image URL" type="text" />
                    <button className="button">Save</button>
                </div>
                <div className="view-add">
                  <a href="">+Add</a>
                </div>
              </div>
          </div>
        </div>
>>>>>>> ae25d620e852c826fdf5be75ac39a1f2360d41fc
      </div>
    );
  }
}

export default View;