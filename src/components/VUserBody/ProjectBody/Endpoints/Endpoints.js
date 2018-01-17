import React, { Component } from 'react';
import EndpointItem from './EndpointItem/EndpointItem';
import './endpoints.scss';
import { findProjectEndpoints } from '../../../../services/project.endpoint.services';

class Endpoints extends Component {
  constructor(props){
    super(props);
      this.state ={
          endpoints: []
      }
      this.handleEndpointNameChange = this.handleEndpointNameChange.bind(this);
      this.handleHttpVerbChange = this.handleHttpVerbChange.bind(this);
      this.handleEndpointURLChange = this.handleEndpointURLChange.bind(this);
      this.addEndpointItemHandler = this.addEndpointItemHandler.bind(this);
      this.removeEndpointItemHandler = this.removeEndpointItemHandler.bind(this);
      this.handleResponseChange = this.handleResponseChange.bind(this);
      this.handleRequestChange = this.handleRequestChange.bind(this);
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
    let newState = this.state.endpoints;
    newState.push({
      id: 3,
      project_id: 1,
      endpoint_name: "3rd name",
      http_verb: 'PUT',
      url_data: 'api/project/overkill',
      response_data: 'BOOM headshot',
      request_data: 'eeeeeek',
    })
    this.setState({endpoints: newState})
  }

  removeEndpointItemHandler(index){
    const newState = this.state.endpoints;
    newState.splice(index, 1);
    this.setState({ endpoints: newState })
  }

  handleEndpointNameChange(newName, index){
    const newState = this.state.endpoints;    
    newState[index].name = newName;
    this.setState({ endpoints: newState })
  }

  handleHttpVerbChange(newVerb, index){
    const newState = this.state.endpoints;    
    newState[index].http_verb = newVerb;
    this.setState({ endpoints: newState })
  }

  handleEndpointURLChange(newURL, index){
    const newState = this.state.endpoints;    
    newState[index].url_data = newURL;
    this.setState({ endpoints: newState })
  }

  handleResponseChange(newReponseData, index){
    const newState = this.state.endpoints;
    newState[index].response_data = newReponseData;
    this.setState({ endpoints: newState })
  }

  handleRequestChange(newRequestData, index){
    const newState = this.state.endpoints;
    newState[index].request_data = newRequestData;
    this.setState({ endpoints: newState })
  }
  



  render() {
    console.table(this.state.endpoints);
    const { userid, projectid } = this.props.match.params;
    const endpoints = this.state.endpoints;
    const displayEndpoints = endpoints.map( endpoint => {
      const index = endpoints.indexOf(endpoint);
      return(
        <EndpointItem 
          key={`endpointItem${index}`} 
          index={index}
          endpointid={endpoint.id}
          projectid={projectid} 
          endpointName={endpoint.endpoint_name}
          httpVerb={endpoint.http_verb}
          urlData={endpoint.url_data}
          requestData={endpoint.request_data}
          responseData={endpoint.response_data}
          

          //Methods
            removeEndpointItemHandler={this.removeEndpointItemHandler}
            handleEndpointNameChange={this.handleEndpointNameChange}
            handleHttpVerbChange={this.handleHttpVerbChange}
            handleEndpointURLChange={this.handleEndpointURLChange}
            handleResponseChange={this.handleResponseChange} 
            handleRequestChange={this.handleRequestChange}
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