import React, { Component } from 'react';
import ReqField from './ReqField';
import ResField from './ResField';

class EndpointsField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {removeEndpointItemHandler, addEndpointRequestHandler, addEndpointResponseHandler} = this.props;
        return (
            <div className="endpoint-item">
            <div className="project-item-header">
                <span onClick={removeEndpointItemHandler}> </span>
            </div>
            
            <div className="endpoint-section-con">
              <div className="endpoint-label-con">
                <label>1.</label>
              </div>
              <div className="ep-field-con">
                  <input className="url-input-field" type="text" />
                  <select className="http-verb-select">
                    <option>GET</option>
                    <option>POST</option>
                    <option>UPDATE</option>
                    <option>DELETE</option>
                  </select>
              </div>
            </div>
            
            <div className="endpoint-divider"> </div>
            <div className="endpoint-section-con-bottom">
                <div className="ep-field-con-bottom" />

                    <ReqField />

                    <div className="ep-bottom-add-row">
                        <div className="req-res-label" />
                        <button className="req-res-add" onClick={addEndpointRequestHandler}> + Add </button>
                    </div>

            </div>
    
            <div className="endpoint-section-con-bottom">
                <div className="ep-field-con-bottom" />

                    <ResField />

                    <div className="ep-bottom-add-row">
                        <div className="req-res-label" />
                        <button className="req-res-add" onClick={addEndpointResponseHandler}> + Add </button>
                    </div>
          </div>
           
            
          </div>
        )
    }
}

export default EndpointsField;