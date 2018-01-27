import React, { Component } from 'react';
import './schemaitem.scss';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/sql';


class NewSchemaItem extends Component {
  constructor(){
    super();
    this.state = {
    }
  }



  render() {


  return (
      <div className="new-schema-item">
          <div className="project-item-header">
           <button> </button>
          </div>
              <div className="schemaItem-inner">
              <input className="schemaItem-name" placeholder={'find_user.sql'} />
              <div className="sqlCon">
                  <label>SQL</label>
                      <AceEditor
                          width={'100%'}
                          border={'1px solid #CCC'}
                          height={'120px'}
                          mode="sql"
                          theme="tomorrow"
                          name={'schema'}
                          onLoad={this.onLoad}
                          onChange={this.onChange}
                          fontSize={14}
                          showPrintMargin={true}
                          showGutter={true}
                          highlightActiveLine={true}
                          value={``}
                          setOptions={{
                          enableBasicAutocompletion: true,
                          enableLiveAutocompletion: true,
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

export default NewSchemaItem;