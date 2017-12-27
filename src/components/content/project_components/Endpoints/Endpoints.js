import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar'
import EndpointItem from './EndpointsField/EndpointItem';
import './endpoints.scss';

class Endpoints extends Component {
  constructor(props){
    super(props);
      this.state ={
        endpoints: {
                arr: [{
                        key: "1",
                        label: "1",
                        url: "www.twitter.com/landonwjohnson",
                        httpVerb: 'GET',
                        request: [{
                            field1: 'test',
                            field2: 'test me again'
                        }],
                        response: [{
                            field1: 'test',
                            field2: 'test me again'
                        }]
                      }]

        }
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
    let EndpointList = this.state.endpoints.arr;
    EndpointList.push({
      key: 2,
      label: 2,
      url: 'URL',
      httpVerb: ''
    })
    this.setState({arr: EndpointList})
  }

  removeEndpointItemHandler(){
    let EndpointList = this.state.endpoints.arr;
    EndpointList.splice(1, 1);
    this.setState({arr: EndpointList})
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
    const displayEndpoints = this.state.endpoints.arr.map( endpoint => {
      return()
    })
    return (
      <div>
      <Header />
        <div className="main-fix">
          <ProjectSetupSidebar userid={userid} projectid={projectid}/>
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
          <div className="blur-overlay"></div>
        </div>
    );
  }
}

export default Endpoints;