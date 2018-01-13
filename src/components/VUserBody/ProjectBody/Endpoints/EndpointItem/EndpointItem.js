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
    if(e === "GET"){
        return hide();
    } 

    if(e === "POST"){
        return show();
    }

    if(e === "PUT"){
        return show();
    }
    
    if(e === "DELETE"){
        return hide();
    }
  }



  render() {
      const requireConClass = classnames({
          "requireCon--hide" : this.state.UI.hideReqField,
          "requireCon": true
      })
    return (
        <div class="endpoint-item">
            <div class="project-item-header">
             <button onClick={this.props.removeEndpointItemHandler}> </button>
            </div>
                <div class="endpoint-inner">
                <input class="endpoint-name" placeholder="name" />
                <div class="httpverb-url-con">
                    <select class="http-verb" onChange={ (e) => this.toggleRequireCon(e.target.value)}>
                        <option value="GET"> GET </option>
                        <option value="POST" > POST </option>
                        <option value="PUT"> PUT </option>
                        <option value="DELETE"> DELETE </option>
                    </select>
                    <input class="api-input" placeholder="/api/books" />
                    
                    <button>Save</button>
                </div>
                <div class="responseCon">
                    <label>Response</label>
                        <AceEditor
                            width={'100%'}
                            border={'1px solid #CCC'}
                            height={'120px'}
                            mode="json"
                            theme="tomorrow"
                            name="responseEditor"
                            onLoad={this.onLoad}
                            onChange={this.onChange}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={`{\n` +
                            `\t"JSON" : "Object"\n` +
                            `}`}
                            setOptions={{
                            enableBasicAutocompletion: false,
                            enableLiveAutocompletion: false,
                            enableSnippets: false,
                            showLineNumbers: true,
                            tabSize: 2,
                        }}/>
                </div>

                <div className={requireConClass}>
                    <label>Require</label>
                        <AceEditor
                            width={'100%'}
                            border={'1px solid #CCC'}
                            height={'120px'}
                            mode="sql"
                            theme="tomorrow"
                            name="requireEditor"
                            onLoad={this.onLoad}
                            onChange={this.onChange}
                            fontSize={14}
                            showPrintMargin={true}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={`{\n` +
                            `\t"JSON" : "Object"\n` +
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





