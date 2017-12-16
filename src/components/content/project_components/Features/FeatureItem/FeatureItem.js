import React, { Component } from 'react';
import classnames from 'classnames';
import { findProjectFeature } from '../../../../../services/project.feature.services';

class FeatureItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feature: {},
            UI: { saveBtn: false }
        };
        this.toggleSaveBtn = this.toggleSaveBtn.bind(this);
    }

    componentWillMount() {
        const { projectid, id } = this.props;
        findProjectFeature(projectid, id)
            .then(res => {
                if (res.status !== 200){
                    console.log(res)
                }
                else {
                    this.setState({ feature: res.data[0] })
                }
            })
            .catch(err => {throw err});
    }

    toggleSaveBtn(e){
        if (e.target.value !== this.state.feature.feature_data) {
            const newState = this.state.UI;
            newState.saveBtn = true;
            this.setState({ UI: newState });
          }
          else {
            const newState = this.state.UI;
            newState.saveBtn = false;
            this.setState({ UI:  newState });
          }
    }

    render() {
        const { index, featureData, handleChangeFeature, handleSubmitFeature, handleDeleteFeature } = this.props;
        const saveBtnClass = classnames({
        "input-complete-btn":  this.state.UI.saveBtn, 
        "input-incomplete-btn" : true
        });
        return (
            <div className="features-item">
                <section>
                    <label>{(index + 1) + '.'}</label>
                    <input value={featureData} onChange={e => { handleChangeFeature(e, index); this.toggleSaveBtn(e)}}/>
                </section>
                <button className={saveBtnClass} onClick={() => handleSubmitFeature(index)}> Save </button>
                <button className="delete-x" onClick={() => handleDeleteFeature(index)}> &times; </button> 
            </div>
        );
    }
}

export default FeatureItem
