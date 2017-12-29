import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSidebar from '../ProjectSetupSidebar/ProjectSidebar'
import './endpoints.scss';
// import EndpointItem from "./EndpointsField/EndpointItem";
import ReqField from './EndpointsField/ReqField';
import ResField from './EndpointsField/ResField';
import { findProjectEndpoints } from '../../../../services/project.endpoint.services'

class Endpoints extends Component {
  constructor(props){
    super(props);
      this.state ={
        endpoints: []
        };
        
      }

componentWillMount() {
  const endpointExamples = [
      {endpoint_data: [{
          url_data: "api/rebellion",
          http_verb: "GET"
      }]
    },
      {endpoint_data: [{
        url_data: "api/empire",
        http_verb: "POST"
    }]
  }
  ];
  const projectid = this.props.match.params.projectid;
  findProjectEndpoints(projectid)
      .then( res => {
          if (res.status !== 200) {
              alert(res);
          }
          else {
              if (res.data.length === 0) {
                  this.setState({ endpoints: endpointExamples });
              }
              else {
                  this.setState({ endpoints: res.data });
              }
          }
      })
      .catch(err => {throw err});
}
  //endpoint ITEM add and remove methods
  
  

  render() {
    const { userid, projectid } = this.props.match.params;
  //   const displayEndpoints = this.state.endpoints.map( endpoint => {
  //     return(
  //     <div className="endpoint-item">
  //     <div className="project-item-header">
  //         <span onClick={this.removeEndpointItemHandler}> </span>
  //     </div>
      
  //     <div className="endpoint-section-con">
  //       <div className="endpoint-label-con">
  //         {endpoint.label + '.'}
  //       </div>
  //       <div className="ep-field-con">
  //           <input className="url-input-field" type="text" placeholder={endpoint.url} />
  //           <select className="http-verb-select">
  //             <option>GET</option>
  //             <option>POST</option>
  //             <option>UPDATE</option>
  //             <option>DELETE</option>
  //           </select>
  //       </div>
  //     </div>
      
  //     <div className="endpoint-divider"> </div>

  //     <div className="endpoint-section-con-bottom">
  //       <div className="ep-field-con-bottom" />

  //       {displayReq}
            
  //           <div className="ep-bottom-add-row">
  //           <div className="req-res-label">
                
  //             </div>
  //           <button className="req-res-add" onClick={this.addEndpointRequestHandler}> + Add </button>
  //           </div>
  //     </div>

  //       {displayRes}

  //     <div className="endpoint-section-con-bottom">
  //       <div className="ep-field-con-bottom" />


  //           <div className="ep-bottom-add-row">
  //           <div className="req-res-label">
                
  //             </div>
  //           <button className="req-res-add" onClick={this.addEndpointResponseHandler}> + Add </button>
  //           </div>
  //     </div>
  //   </div>
  // );
     
  
  
    return (
        <div className="main-fix">
          <ProjectSidebar userid={userid} projectid={projectid}/>
          <div className="endpoints-container">
          
          <div className="endpoints-wrapper">
          <div className="project-section-header">
              <label>Endpoints</label>
          </div>
            <div className="endpoints-inner-container">
              <div className="endpoint-list-container">

                  {displayEndpoints}
                
                <div className="add-button-footer">
                      <button className="add-endpoint-item" onClick={this.addEndpointItemHandler}> Add Endpoint</button>
                </div>
              </div>
            </div>
          </div>
          </div>  
          </div>
    );
  }
}


export default Endpoints;