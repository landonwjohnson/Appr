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
          </div>
        );
    }
}

export default EndpointField;