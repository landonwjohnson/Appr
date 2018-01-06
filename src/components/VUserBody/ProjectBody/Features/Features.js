import React, { Component } from 'react';
import './features.scss';
import FeatureItem from "./FeatureItem/FeatureItem";
import { findProjectFeatures, createProjectFeature, updateProjectFeature, deleteProjectFeature } from '../../../../services/project.feature.services';

class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            features: this.props.featureState
            // features: this.props.featureState
        };
        this.handleAddFeature = this.handleAddFeature.bind(this);
        this.handleChangeFeature = this.handleChangeFeature.bind(this);
        this.handleSubmitFeature = this.handleSubmitFeature.bind(this);
        this.handleDeleteFeature = this.handleDeleteFeature.bind(this);
    }

    scrollToBottom = () => {
        this.listEnd.scrollIntoView({ behavior: "smooth" });
    }

    // shouldComponentMount(){
    //     const currentState = this.props.featureState;
    //     this.setState({
    //         features: currentState
    //     })
    // }

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
                    this.scrollToBottom();
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
        console.log(this.state)
        const { userid, projectid } = this.props.match.params;
        const features = this.state.features;
        const displayFeatures = features.map( feature => {
            const index = features.indexOf(feature);
            const id = feature.id;
            return (
              <FeatureItem index={index} projectid={projectid} id={id} featureData={feature.feature_data} handleChangeFeature={this.handleChangeFeature} handleSubmitFeature={this.handleSubmitFeature} handleDeleteFeature={this.handleDeleteFeature} />
            );
        });
        return (  
                    <div className="features-container" >
                     
                        
                        <div className="container-wrapper">

                            <div className="project-section-header">
                                <label> Features </label>
                            </div>
                                <div className="features-area drop-shadow">
                                    <div className="features-wrapper">
                                        <div className="features-list">

                                          {displayFeatures}

                                        </div>
                                        <div className="features-footer" ref={(el) => { this.listEnd = el; }}>
                                        <button className="add-button" onClick={this.handleAddFeature}> <span/> Add Feature </button>
                                        <button className="input-complete-btn" onClick={() => this.handleSubmitFeature()}> Save </button>

                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}

export default Features;
