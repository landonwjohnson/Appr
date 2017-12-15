import React, { Component } from 'react';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import './features.scss';
import Header from '../../../Header/Header';
import classnames from "classnames";
import { findProjectFeatures, createProjectFeature, updateProjectFeature} from '../../../../services/project.feature.services';


class Features extends Component {
  constructor(props) {
    super(props);
    this.state={
        features: [],
        UI: {
          saveBtn: false
        }
    }
    this.handleAddFeature = this.handleAddFeature.bind(this);
    this.removeFeatureItemHandler = this.removeFeatureItemHandler.bind(this);
    this.handleChangeFeature = this.handleChangeFeature.bind(this);
    this.handleSubmitFeature = this.handleSubmitFeature.bind(this);
  }

  componentWillMount(){

    const featureExamples = [
      {feature: "What are some use cases for your app?"}
    ];
    const projectid = this.props.match.params.projectid;
    findProjectFeatures(projectid)
      .then(res => {
        if(res.status !==200){
          console.log(res)
        }
        else {
          if(res.data.length === 0){
            this.setState({ features: featureExamples });
            this.setState({
              features: res.data
            })
          }else{
            this.setState({features: res.data });
          } 
        }
      })
      .catch(err => {throw err});
  }

  handleChangeFeature(e, index){
    const newState = this.state.features;
    newState[index].feature_data = e.target.value;
    this.setState({ features: newState})


    updateProjectFeature()
    if(e.target.value.length >= 1){
      this.setState({ UI: { saveBtn: true  }})
    }
    else{
      this.setState({ UI: { saveBtn: false }})
    }
  }
  

  handleAddFeature(){
    const projectid = this.props.match.params.projectid;
    const reqBody = {featureData: ''}
    createProjectFeature(projectid, reqBody)
      .then(res => {
        if (res.status !== 200){
          alert(res);
        }
        else{
            const newState = this.state.features;
            newState.push(res.data[0])
            this.setState({features: newState});
        }
      })
      .catch( err => {throw err} );
  }

  handleSubmitFeature(e, index){
    const projectid = this.props.match.params.projectid;
    const featureid = e.target.id;
    const reqBody = { featureData: this.state.features[index].feature_data }
    updateProjectFeature(projectid, featureid, reqBody)
      .then( res => {
        if (res.status !== 200){
            alert(res);
        }
      })
      .catch(err => {throw err});
  }

  removeFeatureItemHandler(){
    let FeatureList = this.state.features;
    FeatureList.splice(1,1);
    this.setState({FeatureList})
  }



  render() {
    const {userid, projectid } = this.props.match.params;
    var saveBtnClass = classnames({
      "input-complete-btn":  this.state.UI.saveBtn, 
      "input-incomplete-btn" : true
    })
    const features = this.state.features;
    const displayFeatures = this.state.features.map( feature => {
      const index = features.indexOf(feature);
      return(
        <div className="features-item" >
          <section>
            <label>{(index + 1) + '.'}</label>
            <input value={feature.feature_data} onChange={(e) => this.handleChangeFeature(e, index)} />
          </section>
          <button id={feature.id} className={saveBtnClass} onClick={this.handleAddFeature} onClick={e => this.handleSubmitFeature(index)}>Save</button>
          <button className="delete-x" onClick={this.removeFeatureItemHandler}>&times;</button> 
        </div>

      )
    })
    return (
      
      
      <div>
      <Header />
      <div className="main-fix">
        <ProjectSetupSidebar />
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
                              <button className="add-button" onClick={this.addFeatureItemHandler}> <span/>  Add Feature </button>
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