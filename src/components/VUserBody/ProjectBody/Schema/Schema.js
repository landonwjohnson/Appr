import React, { Component } from 'react';
import './schema.scss';
import SchemaItem from './SchemaItem/SchemaItem';
import { createProjectSchema, findProjectSchemas } from '../../../../services/project.schema.services';


class Schema extends Component {
  constructor(props){
    super();
    this.state={
      schemas: []
    };
    this.addSchemaItemHandler = this.addSchemaItemHandler.bind(this);
    this.removeSchemaItemHandler = this.removeSchemaItemHandler.bind(this);
  }

  scrollToBottom = () => {
    this.listEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentWillMount(){
    const projectid = this.props.match.params.projectid;
    findProjectSchemas(projectid)
      .then( res => {
        if (res.status !== 200) {
          console.log(res);
        }
        else {
          this.setState({ schemas: res.data})
        }
      })
      .catch(err => {throw err});
  }

  addSchemaItemHandler(projectid){
    const reqBody = {schemaName: 'test', databaseType: '', schemaData: ''};
    createProjectSchema(projectid, reqBody)
      .then( res => {
        if (res.status !== 200){
          alert(res);
        }
        else{
          const newState = this.state.schemas;
          newState.push(res.data[0]);
          this.setState({ schemas: newState });
          this.scrollToBottom();
        }
      })
      .catch(err => {throw err});
  }

  removeSchemaItemHandler(){
    let SchemaList = this.state.schemas;
    SchemaList.splice(1,1);
    this.setState({schemas: SchemaList})
  }

  handleSchemaNameChange(newName, index){
    const newState = this.state.schemas;
    newState[index].schema_name = newName;
    this.setState({ schemas: newState })
  }

  render() {
    const { userid, projectid } = this.props.match.params;
    const schemas = this.state.schemas;
    const displaySchemas = schemas.map( (schema) => {
      const index = schemas.indexOf(schema);
        return <SchemaItem
                  key={`schemaItem${index}`} 
                  schemaid={schema.id}
                  index={index}
                  schemaName={schema.schema_name}
                  projectid={projectid}
                  databaseType={schema.database_type}
                  schemaData={schema.schema_data}
                  removeSchemaItemHandler={this.removeSchemaItemHandler}
                />
    })
    return (

            <div className="schema-container">
              <div className="container-wrapper">
              <div className="schema-wrapper">
                <div className="project-section-header">Schema</div>
                <div className="table-list-container">
                  
                    {displaySchemas}
                  <button className="add-table" onClick={(e) => {this.addSchemaItemHandler(projectid)}}  ref={(el) => { this.listEnd = el; }}> Add Table </button>
                </div>
              </div>
              </div>
            </div>
    );
  }
}

export default Schema;