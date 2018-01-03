import React, {Component} from 'react';

class ColumnItem extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const { handleDeleteColumn } = this.props;
        return(
            <div className="column-item">
            <div className="column-fields-wrapper">
              <input className="column-input-text md-input" type ="text" placeholder="Column Name" />
              <select className="column-input-select sm-input" required placeholder="type">
                <option value="">type </option>
                <option value="">DATE</option>
                <option value="">INTEGER</option>
                <option value="">TEXT</option>
                <option value="">VARCHAR</option>
                <option value="">CHAR</option>
              </select>
                        
              <input className="schema-column-text sm-input" type ="text" placeholder="Size" />
            </div>
              <div className="column-checkbox-wrapper">
                    <div className="column-checkbox">
                      <label> pk </label>
                      <input type="checkbox" />
                    </div>

                    <div className="column-checkbox">
                      <label> fk </label>
                      <input type="checkbox" />
                    </div>

                    <div className="column-checkbox">
                      <label> ai </label>
                      <input type="checkbox" />
                    </div>

                    <div className="column-checkbox">
                      <label> nn </label>
                      <input type="checkbox" />
                    </div>

                <div className="column-checkbox">
                  <label> ur </label>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="remove-row">
                <span className="delete-x" onClick={ handleDeleteColumn }>&times;</span> 
              </div>
          </div> 
        )
    }
}

export default ColumnItem;