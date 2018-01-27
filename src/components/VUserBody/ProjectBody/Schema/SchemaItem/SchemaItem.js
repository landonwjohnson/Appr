import React, { Component } from 'react';
import './schemaitem.scss';
import AceEditor from 'react-ace';
import brace from 'brace';
import 'brace/mode/sql';


class SchemaItem extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }



  render() {
    const {index, schemaName, schemaid, projectid, databaseType, schemaData} = this.props;

  return (
      <div className="new-schema-item">
          <div className="project-item-header">
           <button> </button>
          </div>
              <div className="schemaItem-inner">
              <input className="schemaItem-name" placeholder={schemaName} />
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
                          value={schemaData}
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