import React, { Component } from 'react';
import EndpointItem from './EndpointItem/EndpointItem';
import './endpoints.scss';
import { findProjectEndpoints, updateProjectEndpoint } from '../../../../services/project.endpoint.services';

class Endpoints extends Component {
  constructor(props){
    super(props);
      this.state ={
          endpoints: []
      }

      this.addEndpointItemHandler = this.addEndpointItemHandler.bind(this);
      this.removeEndpointItemHandler = this.removeEndpointItemHandler.bind(this);
      this.handleResponseChange = this.handleResponseChange.bind(this);
  }


  componentWillMount(){
    const projectid = this.props.match.params.projectid;
    findProjectEndpoints(projectid)
      .then(res => {
        if (res.status !== 200){
          alert(res);
        }
        else {
          this.setState({ endpoints: res.data })
        }
      })

  }
  //endpoint ITEM add and remove methods
  addEndpointItemHandler(){
    let EndpointList = this.state.endpoints;
    EndpointList.push({
      key: 2,
      label: 2,
      url: 'URL',
      httpVerb: ''
    })
    this.setState({EndpointList})
  }

  removeEndpointItemHandler(){
    let EndpointList = this.state.endpoints;
    EndpointList.pop();
    this.setState({EndpointList})
  }

  handleResponseChange(e, index){
    const newState = this.state.endpoints;
    newState[index].response_data = e.target.value;
    this.setState({ endpoints: newState });
  }




  


  render() {
    const { userid, projectid } = this.props.match.params;
    const endpoints = this.state.endpoints;
    const displayEndpoints = endpoints.map( endpoint => {
      const index = endpoints.indexOf(endpoint);
      return(
        <EndpointItem 
          httpVerb={endpoint.http_verb}
          id={endpoint.id} 
          projectid={projectid} 
          requestData={endpoint.request_data}
          responseData={endpoint.response_data}
          urlData={endpoint.url_data}
          index={index} 

          //Methods
            removeEndpointItemHandler={this.removeEndpointItemHandler}
            handleResponseChange={this.handleResponseChange} 
        />
      )
    })
    return (
          <div className="endpoints-container">
             <div className="container-wrapper">
                <div className="endpoints-wrapper">
                    <div className="project-section-header">
                        <label>Endpoints</label>
                    </div>

                    <div className="endpoint-list">

                        {displayEndpoints}
                      
                      <div className="add-button-footer">
                            <button className="add-endpoint-item" onClick={this.addEndpointItemHandler}> Add Endpoint</button>
                      </div>
                    </div>
                </div>
                </div>
          </div> 
       
    );
  }
}

export default Endpoints;