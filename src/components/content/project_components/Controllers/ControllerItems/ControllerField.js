import React, {Component} from  'react';

class ControllerField extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { index, controllerid, whenData } = this.props;
        return(
            <div className="contro-item">
            <div className="contro-item-inner">
                <div className="project-item-header">
                    <span className="delete-item" onClick={() => this.handleDeleteController(index)}> </span>
                </div>
                <div className="contro-item-title">
                    <input type="text" placeholder="" />
                </div>
                <div className="contro-item-inputs">
                    <div className="contro-row-container">
                        <label className="contro-row-name"> When </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={whenData} onChange={e => this.handleChangeInput(e, index, 'when_data')} onBlur={e => this.handleSaveChange(e, index)}/>
                        </div>
                    </div>
                    <div className="contro-row-container">
                        <label className="contro-row-name"> Do </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={controller.do_data} onChange={e => this.handleChangeInput(e, index, 'do_data')} onBlur={e => this.handleSaveChange(e, index)}/>
                        </div>
                    </div>
                    <div className="contro-row-container">
                        <label className="contro-row-name"> Require </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={controller.require_data} onChange={e => this.handleChangeInput(e, index, 'require_data')} onBlur={e => this.handleSaveChange(e, index)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ControllerField;