import React, { Component } from 'react';
import './cardview.scss'
import PropTypes from 'prop-types';

class CardView extends Component {
  render() {
    return (
    <div className="cardview-parent">
      <div className="cardview-container">
          <div className="cardview-left">
              <section className="cardview-header">
                  <div className="cardview-title">
                      {this.props.cardTitle}
                  </div>
                  <div className="cardview-fromlist">
                      In list <b>{this.props.listName}</b>

                  </div>
              </section>
              <section className="cardview-body">
                    <label> Add Comment</label>
                    <textarea />
                    <button> Save </button>
              </section>
              <div className="cardview-footer">
              </div>

          </div>
          <div className="cardview-right">
                <section className="top-con">
                    <span onClick={this.onCloseBtnClick}> &times; </span>
                </section>
                <section className="side-group-menu">
                    <div className="cv-side-title">
                        Actions
                    </div>
                    <div className="side-options">
                        <button> Move </button>
                        <button> Copy </button>
                    </div>
                </section>

                <section className="side-group-menu">
                    <div className="cv-side-title">
                        Add
                    </div>
                    <div className="side-options">
                        <button> Members </button>
                        <button> Due Date </button>
                        <button> Labels </button>
                    </div>
                </section>

          </div>
      </div>
    </div>
                       

                      
                  

   
    );
  }
}

CardView.propTypes = { onCloseBtnClick: PropTypes.func }
CardView.defaultProps = { onCloseBtnClick: () => {} }
export default CardView;