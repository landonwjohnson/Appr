import React, { Component } from 'react';

class ReqField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(

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
        )}
}

export default ReqField;