import React, { Component } from 'react';
import './endpoint-item.scss';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/json';

class EndpointItem extends Component {
  constructor(){
    super();
    this.state = {
   
    }
  }
  render() {
    return (
        <div class="endpoint-item">
            <div class="project-item-header">
             <button onClick={this.props.removeEndpointItemHandler}> </button>
            </div>
                <div class="endpoint-inner">
                <input class="endpoint-name" placeholder="name" />
                <div class="httpverb-url-con">
                    <select class="http-verb">
                    <option> GET </option>
                    <option> POST </option>
                    <option> PUT </option>
                    <option> DELETE </option>
                    </select>
                    <input class="api-input" placeholder="/api/books" />
                    
                    <button>Save</button>
                </div>
                <div class="response-con">
                    <label>Response</label>
<AceEditor
width={'100%'}
border={'1px solid #CCC'}
height={'250px'}
mode="json"
theme="tomorrow"
name="responseEditor"
onLoad={this.onLoad}
onChange={this.onChange}
fontSize={14}
showPrintMargin={true}
showGutter={true}
highlightActiveLine={true}
value={`{
    "JSON" : "Object"
}`}
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





