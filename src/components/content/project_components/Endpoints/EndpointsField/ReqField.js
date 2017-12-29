import React, { Component } from 'react';
import { findProjectEndpoints } from '../../../../../services/project.endpoint.services';
                
class ReqItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            req: []
        };

    }

    componentWillMount() {
        const { projectid, id } = this.props;
        findProjectEndpoints(projectid, id)
    }


    render() {
        return (
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

        );
    }
}

export default ReqItem;