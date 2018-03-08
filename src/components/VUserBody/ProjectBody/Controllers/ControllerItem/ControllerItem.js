import React, {Component} from  'react';
import { findProjectViews } from '../../../../../services/project.view.services';


class ControllerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            views: []
        };
    }

    componentDidMount(){
        let projectid = this.props.projectid;
            findProjectViews(projectid)
            .then( res => {
                if(res.status !== 200) {
                console.log(res);
                }
                else {
                    this.setState({ views: res.data })
                    }
            })
            .catch(err => {throw err});
    }

    render() {
        const { index, controllerid, whenData, doData, requireData, handleDeleteController, handleChangeInput, handleSaveChange, controllerName } = this.props;
        const views = this.state.views;
        const displayViews = views.map( view => {
            const index = views.indexOf(view);
            return (
                <option key={`view-${index}`} value={view.name} > {view.name} </option>
            )
        })
        return(
            <div className="contro-item">
            <div className="contro-item-inner">
                <div className="project-item-header">
                    <button className="delete-item" onClick={() => handleDeleteController(index) }> </button>
                </div>
                <div className="contro-item-title">
                    <select name={`${controllerid}-selectname`} onChange={(e) => handleChangeInput(e, index, 'controller_name')} onBlur={handleSaveChange(index)}  >
                            <option style={{'display': 'none'}} > {controllerName} </option>
                            { displayViews }
                    </select>
                </div>
                <div className="contro-item-inputs">
                    <div className="contro-row-container">
                        <label className="contro-row-name"> When </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={whenData} onChange={e => handleChangeInput(e, index, 'when_data')} onBlur={() => handleSaveChange(index)}/>
                        </div>
                    </div>
                    <div className="contro-row-container">
                        <label className="contro-row-name"> Do </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={doData} onChange={e => handleChangeInput(e, index, 'do_data')} onBlur={() => handleSaveChange(index)}/>
                        </div>
                    </div>
                    <div className="contro-row-container">
                        <label className="contro-row-name"> Require </label>
                        <div className="contro-input-row">
                            <input className="contro-input-field" type="text" id={controllerid} value={requireData} onChange={e => handleChangeInput(e, index, 'require_data')} onBlur={() => handleSaveChange(index)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ControllerItem;