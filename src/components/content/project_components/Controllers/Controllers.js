import React, { Component } from 'react';
import ProjectSidebar from '../ProjectSetupSidebar/ProjectSidebar';
import Header from '../../../Header/Header';
import addIcon from '../../../../img/icons/add-icon.svg';
import './controllers.scss';
import ControllerField from './ControllerItems/ControllerField';
import { createProjectController, findProjectControllers, updateProjectController, deleteProjectController } from '../../../../services/project.controller.services';

class Controllers extends Component {
  constructor(props) {
      super(props);
      this.state = {
          controllers: []
      };
      this.handleAddController = this.handleAddController.bind(this);
      this.handleChangeInput = this.handleChangeInput.bind(this);
      this.handleSaveChange = this.handleSaveChange.bind(this);
      this.handleDeleteController = this.handleDeleteController.bind(this);
  }

  scrollToBottom = () => {
    this.listEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentWillMount() {
      const projectid = this.props.match.params.projectid;
      findProjectControllers(projectid)
        .then( res => {
            if (res.status !== 200) {
                console.log(res);
            }
            else {
                this.setState({ controllers: res.data });
            }
        })
        .catch(err => {throw err});
  }

  handleAddController() {
    const projectid = this.props.match.params.projectid;
    const reqBody = { whenData: '', doData: '', requireData: '' };
    createProjectController(projectid, reqBody)
        .then(res => {
            if (res.status !== 200) {
                console.log(res);
            }
            else {
                let newState = this.state.controllers;
                newState.push(res.data[0]);
                this.setState({ controllers: newState });
                this.scrollToBottom();
            }
        })
        .catch(err => {throw err});
  }

  handleChangeInput(e, index, field) {
      const newState = this.state.controllers;
      newState[index][field] = e.target.value;
      this.setState({ controllers: newState });
  }

  handleSaveChange(e, index) {
      const projectid = this.props.match.params.projectid;
      const controllerid = e.target.id;
      const reqBody = {
          whenData: this.state.controllers[index].when_data,
          doData: this.state.controllers[index].do_data,
          requireData: this.state.controllers[index].require_data
      };
      updateProjectController(projectid, controllerid, reqBody)
        .then( res => {
            if (res.status !== 200) {
                console.log(res);
            }
        })
        .catch(err => {throw err});
  }

  handleDeleteController(index) {
    const projectid = this.props.match.params.projectid;
    const controllerid = this.state.controllers[index].id;
    deleteProjectController(projectid, controllerid)
        .then(res => {
            if (res.status !== 200) {
                console.log(res);
            }
            else {
                const newState = this.state.controllers;
                newState.splice(index, 1);
                this.setState({ controllers: newState });
            }
        })
        .catch(err => {throw err});
  }
  // if we need to we can change the key to equal something else other than the index
  render() { 
    const { userid, projectid } = this.props.match.params;
    const controllers = this.state.controllers;
    const displayControllers = controllers.map(controller => {
        const index = controllers.indexOf(controller);
        return <ControllerField key={index}  index={index} controllerid={controller.id} whenData={controller.when_data} doData={controller.do_data} requireData={controller.require_data} handleDeleteController={this.handleDeleteController} handleChangeInput={this.handleChangeInput} handleSaveChange={this.handleSaveChange}/>
    });
    
    return (
            <div className="main-fix">
                <ProjectSidebar userid={userid} projectid={projectid}/>
                <div className="controllers-container">
                    <div className="controllers-wrapper">
                        <div className="project-section-header"> Controllers </div>
                        <div className="controller-list-container">
                            {displayControllers}

                            <button className="add-contro-item" onClick={this.handleAddController}>
                                <div className="add-contro-item-inner">
                                    <div className="add-contro-item-body">
                                        <img src={addIcon} alt="Add New Controller"/>
                                    </div>
                                    <div className="add-contro-item-footer" ref={(el) => { this.listEnd = el; }}>
                                        <label> Add New Controller </label>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default Controllers;
