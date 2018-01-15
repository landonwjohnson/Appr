import React, { Component } from 'react';
import EndpointItem from './EndpointItem/EndpointItem';
import './endpoints.scss';

class Endpoints extends Component {
  constructor(props){
    super(props);
      this.state ={
          endpoints: [
            {
              id: 1,
              project_id: 1,
              url_data: 'api/project/endpoints',
              http_verb: 'GET',
              response_data: 'What up boy',
              request_data: ';)',
            },
            {
              id: 2,
              project_id: 1,
              url_data: 'api/project/blahboo',
              http_verb: 'POST',
              response_data: 'pika',
              request_data: 'chu',
            },
            {
              id: 3,
              project_id: 1,
              url_data: 'api/project/overkill',
              http_verb: 'PUT',
              response_data: 'BOOM headshot',
              request_data: 'eeeeeek',
            }
          ]
      }

      this.addEndpointItemHandler = this.addEndpointItemHandler.bind(this);
      this.removeEndpointItemHandler = this.removeEndpointItemHandler.bind(this);
      this.handleResponseChange = this.handleResponseChange.bind(this);
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