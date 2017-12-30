import React, { Component } from 'react';
import './schema.scss';
import ProjectSidebar from '../ProjectSetupSidebar/ProjectSidebar';
import Header from '../../../Header/Header';
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

  addSchemaItemHandler(){
    const projectid = this.props.match.params.projectid;
    const reqBody = {tableNameId: Number, columnName: '', schemaTypeId: Number, sizeData: '', isPrimaryKey: Boolean, isForeignKey: Boolean, isSerial: Boolean, isNotNull: Boolean, isUnique: Boolean};
    createProjectSchema(projectid, reqBody)
      .then(res => {
        if( res.status !== 200) {
          console.logt(res);
        }
        else {
          const newState = this.state.schemas;
          newState.push(res.data[0]);
          this.setState({schemas: newState});
          // this.scrollToBottom();
        }
      })
      .catch(err => {throw err});
  }

  removeSchemaItemHandler(){
    let SchemaList = this.state.schemas;
    SchemaList.splice(1,1);
    this.setState({schemas: SchemaList})
  }

  render() {
    const { userid, projectid } = this.props.match.params;
    const displaySchemas = this.state.schemas.map( schema => {
        return <SchemaItem removeSchemaItemHandler={this.removeSchemaItemHandler}/>
    })
    return (
        <div className="main-fix">
          <ProjectSidebar userid={userid} projectid={projectid}/>
            <div className="schema-container">
              <div className="schema-wrapper">
                <div className="project-section-header">Schema</div>
                <div className="table-list-container">
                    {displaySchemas}
                  <button className="add-table" onClick={this.addSchemaItemHandler}> Add Table </button>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Schema;