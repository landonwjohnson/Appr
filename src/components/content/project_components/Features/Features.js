import React, { Component } from 'react';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import './features.scss';
import Header from '../../../Header/Header';
import classnames from "classnames";


class Features extends Component {
  constructor(props) {
    super(props);
    this.state={
        features: {
               arr: [{
                   key: 1,
                   label: 1,
                   name: 'Write use cases for your app'
                 }]
        },

        UI: {
          saveBtn: false
        }
    }
    this.addFeatureItemHandler = this.addFeatureItemHandler.bind(this);
    this.removeFeatureItemHandler = this.removeFeatureItemHandler.bind(this);
    this.handleSaveBtnUI = this.handleSaveBtnUI.bind(this);
  }

  handleSaveBtnUI(e){
    // var id = e.id;
    console.log(this.state.UI.saveBtn)
    console.log(e)
    
    if(e.value.length >= 1){
      this.setState({ UI: { saveBtn: true  }})
    }
    else{
      this.setState({ UI: { saveBtn: false }})
    }
    

  }
  

  addFeatureItemHandler(){
    let FeatureList = this.state.features.arr;
    FeatureList.push({
      key: 2,
      label: 2,
      name: 'Type here'
    })
    this.setState({ arr: FeatureList})
  }

  removeFeatureItemHandler(){
    let FeatureList = this.state.features.arr;
    FeatureList.splice(1,1);
    this.setState({arr: FeatureList})
  }



  render() {
    var saveBtnClass = classnames({
      "input-complete-btn":  this.state.UI.saveBtn, 
      "input-incomplete-btn" : true
  })
    console.log(this.state.features.arr.name)
    const displayFeatures = this.state.features.arr.map( feature => {
      return(

        <div className="features-item" >
          <section>
            <label>{feature.label + '.'}</label>
            <input placeholder={feature.name} id={feature.name.replace(/[^a-zA-Z]/g, '').toLowerCase() + ".feature"} onChange={(e) => this.handleSaveBtnUI(e.target)} />
          </section>
          <button className={saveBtnClass}>Save</button>
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