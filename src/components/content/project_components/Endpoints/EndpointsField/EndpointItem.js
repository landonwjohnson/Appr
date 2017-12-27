import React, { Component } from 'react';

class EndpointField extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        const {  } = this.props
        return (
            <div className="endpoint-item">
            <div className="project-item-header">
                <span onClick={this.removeEndpointItemHandler}> </span>
            </div>
            
            <div className="endpoint-section-con">
              <div className="endpoint-label-con">
                {endpoint.label + '.'}
              </div>
              <div className="ep-field-con">
                  <input className="url-input-field" type="text" placeholder={endpoint.url} />
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
    
                  <div className="ep-bottom-row">
                    <div className="req-res-label">
                      REQ
                    </div>
                      <div className="req-res-wrapper">
                        <input className="req-input-field" type="text" placeholder="username" />
                        <span>:</span>
                        <input className="req-input-field" type="text" placeholder="" />
                      </div>
                  </div>
                  
                  <div className="ep-bottom-add-row">
                  <div className="req-res-label">
                      
                    </div>
                  <button className="req-res-add" onClick={this.addEndpointRequestHandler}> + Add </button>
                  </div>
            </div>
    
    
            <div className="endpoint-section-con-bottom">
              <div className="ep-field-con-bottom" />
    
                  <div className="ep-bottom-row">
                    <div className="req-res-label">
                      RES
                    </div>
                      <div className="req-res-wrapper">
                        <input className="req-input-field" type="text" placeholder="username" />
                        <span>:</span>
                        <input className="req-input-field" type="text" placeholder="" />
                      </div>
                  </div>
                  <div className="ep-bottom-add-row">
                  <div className="req-res-label">
                      
                    </div>
                  <button className="req-res-add" onClick={this.addEndpointResponseHandler}> + Add </button>
                  </div>
            </div>
          </div>
        );
    }
}

export default EndpointField;