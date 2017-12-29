import React, { Component } from 'react';
import ProjectSidebar from '../ProjectSetupSidebar/ProjectSidebar';
import './features.scss';
import Header from '../../../Header/Header';
import FeatureItem from "./FeatureItem/FeatureItem";
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

    scrollToBottom = () => {
        this.listEnd.scrollIntoView({ behavior: "smooth" });
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



// Does featureItem need a key?
    render() {
        console.log(this.props.background);

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
                <div className="main-fix">
                    <ProjectSidebar userid={userid} projectid={projectid} handleProjectBackground={this.props.handleProjectBackground} background={this.props.background}/>
                    <div className="blur-overlay" style ={ { backgroundImage: `url(${this.props.background})` } } />

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
                                    </div>
                                
                                </div>
                            </div>
                            {/* <div className="blur-overlay" style={{backgroundImage: `url(${this.props.background})`}}></div>   */}
                        </div>

                    </div>

                </div>

        );
    }
}

export default Features;
