import React, {Component} from 'react';
import ColumnItem from './ColumnItem/ColumnItem';


class SchemaItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        };

        this.handleAddColumn = this.handleAddColumn.bind(this);
        this.handleDeleteColumn = this.handleDeleteColumn.bind(this);
    }

    handleAddColumn(){
      let ColumnList = this.state.columns;
      ColumnList.push({
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
      this.setState({columns: ColumnList})
    }

    handleDeleteColumn(){
      let newState = this.state.columns;
      newState.pop();
      console.log("working");
      this.setState({columns: newState})
    }

    render() {
        const {removeSchemaItemHandler} = this.props;
        const displayColumns = this.state.columns.map( column => {
            return <ColumnItem handleDeleteColumn={this.handleDeleteColumn} />
        })
        return(
            <div className="schema-item">
            <div className="project-item-header">
              <button className="delete-item"onClick={removeSchemaItemHandler}></button>
            </div>
              <div className="name-table-row">
                <input className="name-table" type="text" placeholder="Table Name" />
              </div>

              {displayColumns}
                      
              <div className="column-item-footer">
                <button className="add-button" onClick={this.handleAddColumn}> <span/> Add Column </button>
                <button className="add-button">Save</button>
              </div>
            </div>
        )
    }
}

export default SchemaItem;