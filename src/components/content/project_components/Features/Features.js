import React, { Component } from 'react';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import './features.scss';
import Header from '../../../Header/Header';
import { getUId } from '../../../../utils/uid.utils';
import { createProjectFeature, findProjectFeatures, updateProjectFeature, deleteProjectFeature, findProjectFeature } from '../../../../services/project.feature.services';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state={
        features: []
      }
      this.handleAddField = this.handleAddField.bind(this);
      this.handleChangeField = this.handleChangeField.bind(this);
      // this.submitChangeField = this.submitChangeField.bind(this);
      this.handleDeleteField = this.handleDeleteField.bind(this);
  }

componentWillMount() {
  const projectid = this.props.match.params.projectid
  const featureExamples = [
    {feature_data: 'example: Force Sensitivity'},
    {feature_data: 'example: Galactic Security'}
  ];

  findProjectFeatures(projectid)
    .then( res => {
      if(res.status !== 200) {
        console.log(res);
      }
      else {
        if(res.data.length > 0) {
          this.setState({ features: res.data });
        }
        else {
          this.setState({ features: featureExamples })
        }
      }
    })
    .catch(err => {throw err});
}

handleAddField(field) {
  const projectid = this.props.match.params.projectid || 1;
  let body = {viewData: ''};
  const newState = this.state[field];

  if (field === 'features') {
    body = {featureData: ''};
    newState.push(body);
    this.setState({ features: newState });

    createProjectFeature(projectid, body)
        .then(res => {
            if (res.status !== 200) {
                console.log(res);
            }
        })
        .catch(err => {throw err});
  }
}

handleChangeField(e, field, index) {
  const key = e.target.name;
  const value = e.target.value;
  const newState = this.state[field];
  newState[index][key] = value;
  this.setState({ [field]: newState });
}

// submitChangeField(e, field, index) {
//   const key = e.target.name;
//   const projectid = this.props.match.params.projectid
//   const id = Number(e.target.id);
//   const body = this.state[field][index];

//   if (field === 'features') {
//       updateProjectFeature(projectid, id, body)
//       .then(res => {
//           if (res.status !== 200) {
//               console.log(res);
//           }
//       })
//       .catch(err => {throw err});
//   }
// }

handleDeleteField(e, field, index) {
  const projectid = this.props.match.params.projectid
  const id = Number(e.target.id);
  const newState = this.state[field];
  newState.splice(index, 1);
  this.setState({ [field]: newState });

  if (field === 'features') {
      deleteProjectFeature(projectid, id)
          .then(res => {
              if (res.status !== 200) {
                  console.log(res);
              }
          })
          .catch(err => {throw err});
  }
}

  render() {
    const features = this.state.features;

    const displayFeatures = features.map( feature => {
      const field = 'features';
      const index = features.indexOf(feature);
      return(
          <div className="features-item" key={`feature-${index}`}>
              <section>
                  <label>{(index + 1) + '.'}</label>
                  <input id={feature.id} name="feature_data" value={feature.feature_data} onChange={e => this.handleChangeField(e, field, index)}/>
              </section>
              <button className="not-enough-info-btn" id={feature.id} onClick={e => this.submitChangeField(e, field, index)}> Save </button>
              <span className="delete-x" id={feature.id} onClick={e => this.handleDeleteField(e, field, index)}> &times; </span>
          </div>
      );
  });

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
                              <button className="add-button" onClick={() => this.handleAddField('features')}> <span/>  Add Feature </button>
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