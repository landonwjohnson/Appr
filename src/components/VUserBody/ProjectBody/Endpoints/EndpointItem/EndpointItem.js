import React, { Component } from 'react';
import './endpoint-item.scss';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/json';
import classnames from 'classnames';

class EndpointItem extends Component {
  constructor(){
    super();
    this.state = {
        UI:{
            hideReqField: true
        }
    }
    this.toggleRequireCon = this.toggleRequireCon.bind(this);
  }

  toggleRequireCon(e){
    const hide = () => {this.setState({UI:{hideReqField: true}})};
    const show = () => {this.setState({UI:{hideReqField: false}})};
    if(e === "GET" || e === "DELETE"){
        return hide();
    } 

    if(e === "POST" || e === "PUT"){
        return show();
    }

  }


  render() {
    const {httpVerb, id, projectid, requestData, responseData, urlData, index, handleResponseChange} = this.props;
    const requireConClass = classnames({
        "requireCon--hide" : this.state.UI.hideReqField,
        "requireCon": true
    })

    console.log(document.getElementsByClassName('ace_content').value)
  return (
      <div className="endpoint-item">
          <div className="project-item-header">
           <button onClick={this.props.removeEndpointItemHandler}> </button>
          </div>
              <div className="endpoint-inner">
              <input className="endpoint-name" placeholder="name" />
              <div className="httpverb-url-con">
                  <select className="http-verb"  onChange={ (e) => this.toggleRequireCon(e.target.value)}>
                      <option style={{'display': 'none'}} value={httpVerb}> {httpVerb} </option>
                      <option value="GET"> GET </option>
                      <option value="POST" > POST </option>
                      <option value="PUT"> PUT </option>
                      <option value="DELETE"> DELETE </option>
                  </select>
                  <input className="api-input" placeholder={urlData} />
                  
                  <button>Save</button>
              </div>
              <div className="responseCon">
                  <label>Response</label>
                      <AceEditor
                          width={'100%'}
                          border={'1px solid #CCC'}
                          height={'120px'}
                          mode="json"
                          theme="tomorrow"
                          name="responseEditor"
                          onLoad={this.onLoad}
                          onChange={ (e) => {handleResponseChange(e, index)}}
                          fontSize={14}
                          showPrintMargin={true}
                          showGutter={true}
                          highlightActiveLine={true}
                          value={`${responseData}`}
                          setOptions={{
                          enableBasicAutocompletion: true,
                          enableLiveAutocompletion: true,
                          enableSnippets: false,
                          showLineNumbers: true,
                          tabSize: 2,
                      }}/>
              </div>

              <div className={requireConClass}>
                  <label>Request</label>
                      <AceEditor
                          width={'100%'}
                          border={'1px solid #CCC'}
                          height={'120px'}
                          mode="json"
                          theme="tomorrow"
                          name="requireEditor"
                          onLoad={this.onLoad}
                          onChange={this.onChange}
                          fontSize={14}
                          showPrintMargin={true}
                          showGutter={true}
                          highlightActiveLine={true}
                          value={`{\n` +
                          `\t${requestData}\n` +
                          `}`}
                          setOptions={{
                          enableBasicAutocompletion: false,
                          enableLiveAutocompletion: false,
                          enableSnippets: false,
                          showLineNumbers: true,
                          tabSize: 2,
                      }}/>
              </div>
          
          </div>
      
      </div>
  );
}
}

export default EndpointItem;