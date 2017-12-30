import React, { Component } from 'react';
import './schema.scss';
import ProjectSidebar from '../ProjectSetupSidebar/ProjectSidebar';
import Header from '../../../Header/Header';
import SchemaItem from './SchemaItem/SchemaItem';


class Schema extends Component {
  constructor(props){
    super();
    this.state={
      schemas: [{
            tables: [{
                key: 1,
                name: 'Table name'
              }],
            
      }]
    }
    this.addSchemaItemHandler = this.addSchemaItemHandler.bind(this);
    this.removeSchemaItemHandler = this.removeSchemaItemHandler.bind(this);
  }

  addSchemaItemHandler(){
    let SchemaList = this.state.schemas;
    SchemaList.push({
      tables: [{
          key: 1,
          name: 'Table name'
        }],
      columns:[{
          key: 1,
          name: '',
          type: '',
          size: '',
          primaryKey: false,
          foreignKey: false,
          autoIncrement: false,
          notNull: false,
          uniqueReference: false
        }]
    })
    this.setState({schemas: SchemaList})
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