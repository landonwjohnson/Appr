import React, { Component } from 'react';
import Header from '../../../Header/Header';
import ProjectSetupSidebar from '../ProjectSetupSidebar/ProjectSetupSidebar';
import { getUId } from '../../../../utils/uid.utils';
import { createProjectView, findProjectViews, findProjectView, updateProjectView, deleteProjectView } from '../../../../services/project.view.services';
import './view.scss';

class View extends Component {
<<<<<<< HEAD
  constructor(props){
  super(props);
  this.state={
      view: {
          arr:[{
              key: 1,
              label: 1,
              name: 'Name',
              imageurl: 'ImageURL',
          }]
      }
=======
    constructor(props) {
      super(props);
      this.state={
          views: []
      };

      this.handleAddViewButton = this.handleAddViewButton.bind(this);
      this.handleChangeView = this.handleChangeView.bind(this);
      this.handleDeleteViewButton = this.handleDeleteViewButton.bind(this);

    }


    componentWillMount() {
      const projectid = this.props.match.params.projectid || 1;
      const viewExamples = [
          { view_data: 'example: Use the force Luke.' },
          { view_data: 'example: I like this view' }
      ];

      findProjectViews(projectid)
        .then( res => {
            if(res.status !== 200) {
              console.log(res);
            }
            else {
                if(res.data.length > 0) {
                  this.setState({ views: res.data })
                }
                else {
                  this.setState({ views: viewExamples });
                }
            }
        })
        .catch(err => {throw err});
    }

    handleAddViewButton() {
        const projectid = this.props.match.params.projectid || 1;
        const reqBody = {
          name: '',
          imageUrl:  ''
        }


        createProjectView( projectid, reqBody )
            .then(res => {
                if(res.status !== 200) {
                  console.log(res);
                } else {
                   const newState = this.state.views;
                   newState.push(res.data[0]);
                   this.setState({ views: newState });
                }
            })
            .catch(err => {throw err});
>>>>>>> 92fc274aeb98ea39bc68cc213623215c2496f6e3
    }
    this.addViewItemHandler = this.addViewItemHandler.bind(this);
    this.removeViewItemHandler = this.removeViewItemHandler.bind(this);
  }

<<<<<<< HEAD
  addViewItemHandler(){
    let ViewList = this.state.view.arr;
    ViewList.push({
      key: 2,
      label: 2,
      name: 'Name',
      imageurl: 'ImageURL',
    })
    this.setState({arr: ViewList})
  }

  removeViewItemHandler(){
    let ViewList = this.state.view.arr;
    ViewList.splice(1, 1);
    this.setState({arr: ViewList})
  }
=======
    handleChangeView(e, index, field) {
        const newState = this.state.views;
        newState[index][field] = e.target.value;
        this.setState({ views: newState });
    }

    submitChangeView(e, index) {
      debugger;
        const projectid = this.props.match.params.projectid;
        const viewid = Number(e.target.id);
        const {name, image_url} = this.state.views[index];
        const reqBody = {
          name,
          imageUrl:  image_url
        }

        updateProjectView(projectid, viewid, reqBody)
            .then(res => {
                if(res.status !== 200) {
                    console.log(res);
                }
            })
            .catch(err => {throw err});
    }

    handleDeleteViewButton(e, index) {
        const projectid = Number(this.props.match.params.projectid);
        const viewid = Number(e.target.id);
        const newState = this.state.views;
        newState.splice(index, 1);
        this.setState({ views: newState });
>>>>>>> 92fc274aeb98ea39bc68cc213623215c2496f6e3


  
  render() {
<<<<<<< HEAD
    const displayViews = this.state.view.arr.map( view => {
      return(
        <div className="view-item">
        <section>
          <label>{view.label + '.'}</label>
          <input className="view-input-name" placeholder="Name" type="text" />
          <input className="view-input-imgurl" placeholder="Image URL" type="text" />
        </section>
          <button className="not-enough-info-btn">Save</button>
          <span className="delete-x" onClick={this.removeViewItemHandler}>&times;</span> 
      </div>
      )
    })
=======
    const views = this.state.views;
    const displayViews = views.map( view => {
        const index = views.indexOf(view);
        return (
          <div className="view-item" key={`idea-${index}`}>
          <section>
            <label>{(index + 1) + '.'}</label>
            <input className="view-input-name" type="text" id={view.id} value={view.name} onChange={e => this.handleChangeView(e, index, "name")} />
            <input className="view-input-imgurl" type="text" id={view.id} value={view.image_url} onChange={e => this.handleChangeView(e, index, "image_url")} />
          </section>
            <button  id={view.id} onClick={e => this.submitChangeView(e, index)}>Save</button>
            <span className="delete-x" id={view.id} onClick={e => this.handleDeleteViewButton(e, index)}>&times;</span> 
        </div>
        )
    });
>>>>>>> 92fc274aeb98ea39bc68cc213623215c2496f6e3

    return (
      <div>
      <Header />
        <div className="main-fix">
          <ProjectSetupSidebar />
          
          <div className="view-container">
            <div className="view-inner-con">
              <div className="project-section-header">
                  <label>View </label>
              </div>
           
              <div className="view-area drop-shadow">
                <div className="view-wrapper">
                  {displayViews}
              
                  <div className="view-footer">
                  <button className="add-button" onClick={this.addViewItemHandler}> <span/> Add View </button>
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

export default View;