import React, {Component} from  'react';

class ControllerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { index, controllerid, whenData, doData, requireData, handleDeleteController, handleChangeInput, handleSaveChange } = this.props;
        return(
            <div className="contro-item">
            <div className="contro-item-inner">
                <div className="project-item-header">
                    <button className="delete-item" onClick={() => handleDeleteController(index) }> </button>
                </div>
                <div className="contro-item-title">
                    <select> 
                        <option value="view1">View 1</option>
                        <option value="view2">View 2</option>
                        <option value="view3">View 3</option>
                        <option value="view4">View 4</option>
                        <option value="view5">View 5</option>
                        <option value="view6">View 6</option>
                    </select>
                </div>
                <div className="contro-item-inputs">
                    <div className="contro-row-container">
                        <label className="contro-row-name"> When </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={whenData} onChange={e => handleChangeInput(e, index, 'when_data')} onBlur={e => handleSaveChange(e, index)}/>
                        </div>
                    </div>
                    <div className="contro-row-container">
                        <label className="contro-row-name"> Do </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={doData} onChange={e => handleChangeInput(e, index, 'do_data')} onBlur={e => handleSaveChange(e, index)}/>
                        </div>
                    </div>
                    <div className="contro-row-container">
                        <label className="contro-row-name"> Require </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={requireData} onChange={e => handleChangeInput(e, index, 'require_data')} onBlur={e => handleSaveChange(e, index)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ControllerItem;