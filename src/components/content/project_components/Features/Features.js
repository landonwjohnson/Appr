import React, { Component } from 'react';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import './features.scss';
import Header from '../../../Header/Header';
import { findProjectFeatures, createProjectFeature, updateProjectFeature, deleteProjectFeature } from '../../../../services/project.feature.services';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: []
        };
        this.handleAddFeature = this.handleAddFeature.bind(this);
        this.handleChangeFeature = this.handleChangeFeature.bind(this);
        this.handleSubmitFeature = this.handleSubmitFeature.bind(this);
        this.handleDeleteFeature = this.handleDeleteFeature.bind(this);
    }

    componentWillMount() {
        const featureExamples = [
            {feature_data: "e.g. A user can click a button"},
            {feature_data: "e.g. A user can create an account"}
        ];
        const projectid = this.props.match.params.projectid;
        findProjectFeatures(projectid)
            .then( res => {
                if (res.status !== 200) {
                    alert(res);
                }
                else {
                    if (res.data.length === 0) {
                        this.setState({ features: featureExamples });
                    }
                    else {
                        this.setState({ features: res.data });
                    }
                }
            })
            .catch(err => {throw err});
    }

    handleAddFeature() {
        const projectid = this.props.match.params.projectid;
        const reqBody = { featureData: '' };
        createProjectFeature(projectid, reqBody)
            .then( res => {
                if (res.status !== 200) {
                    alert(res);
                }
                else {
                    const newState = this.state.features;
                    newState.push(res.data[0]);
                    this.setState({ features: newState });
                }
            })
            .catch(err => {throw err});
    }

    handleChangeFeature(e, index) {
        const newState = this.state.features;
        newState[index].feature_data = e.target.value;
        this.setState({ features: newState });
    }

    handleSubmitFeature(index) {
        const projectid = this.props.match.params.projectid;
        const { id, feature_data } = this.state.features[index];
        const reqBody = { featureData: feature_data };
        updateProjectFeature(projectid, id, reqBody)
            .then( res => {
                if (res.status !== 200) {
                    alert(res);
                }
            })
            .catch(err => {throw err});
    }

    handleDeleteFeature(index) {
        const projectid = this.props.match.params.projectid;
        const featureid = this.state.features[index].id;
        deleteProjectFeature(projectid, featureid)
            .then( res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    const newState = this.state.features;
                    newState.splice(index, 1);
                    this.setState({ features: newState });
                }
            })
            .catch(err => {throw err});
    }

    render() {
        const { userid, projectid } = this.props.match.params;
        const features = this.state.features;
        const displayFeatures = features.map( feature => {
            const index = features.indexOf(feature);
            return (
                <div className="features-item">
                    <section>
                        <label>{(index + 1) + '.'}</label>
                        <input value={feature.feature_data} onChange={e => this.handleChangeFeature(e, index)}/>
                    </section>
                    <button className="not-enough-info-btn" onClick={() => this.handleSubmitFeature(index)}> Save </button>
                    <button className="delete-x" onClick={() => this.handleDeleteFeature(index)}> &times; </button> 
                </div>
            );
        });
        return (
            <div>
                <Header />
                <div className="main-fix">
                    <ProjectSetupSidebar userid={userid} projectid={projectid}/>
                    <div className="features-container">
                        <div className="container-wrapper">
                            <div className="project-section-header">
                                <label>Features</label>
                            </div>
                                <div className="features-area drop-shadow">
                                    <div className="features-wrapper">
                                        <div className="features-list">
                                        {displayFeatures}
                                        </div>
                                        <div className="features-footer">
                                        <button className="add-button" onClick={this.handleAddFeature}> <span/> Add Feature </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;
