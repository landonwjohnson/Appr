import React, { Component } from 'react';
import EndpointItem from './EndpointItem/EndpointItem';
import brace from 'brace';
import './endpoints.scss';

class Endpoints extends Component {
  constructor(props){
    super(props);
      this.state ={
          endpoints: []
      }

      this.addEndpointItemHandler = this.addEndpointItemHandler.bind(this);
      this.removeEndpointItemHandler = this.removeEndpointItemHandler.bind(this);
      
      this.addEndpointRequestHandler = this.addEndpointRequestHandler.bind(this);
      this.removeEndpointRequestHandler = this.removeEndpointItemHandler.bind(this);

      this.addEndpointResponseHandler = this.addEndpointResponseHandler.bind(this);
      this.removeEndpointResponseHandler = this.removeEndpointResponseHandler.bind(this);
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


  //endpoint REQUEST add and remove methods
  addEndpointRequestHandler(){
    console.log('add request')
  }

  removeEndpointRequestHandler(){

  }


  //endpoint RESPONSE add and remove methods
  addEndpointResponseHandler(){
    console.log('add response')
  }

  removeEndpointResponseHandler(){

  }

  render() {
    const { userid, projectid } = this.props.match.params;
    const displayEndpoints = this.state.endpoints.map( endpoint => {
      return(
        <EndpointItem removeEndpointItemHandler={this.removeEndpointItemHandler} />
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