import React, { Component } from 'react';
import addIcon from '../../../../img/icons/add-icon.svg';
import './controllers.scss';
import ControllerItem from './ControllerItem/ControllerItem';
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
      this.handleControllerNameChange = this.handleControllerNameChange.bind(this);
  }

  scrollToBottom = () => {
    this.listEnd.scrollIntoView({ behavior: "smooth" });
  }

  componentWillMount() {
      const controllerExamples = [
          {
              when_data: 'User clicks login',
              do_data: 'land on dashboard page',
              require_data: 'Username and password'
          }
      ]
      const projectid = this.props.match.params.projectid;
      findProjectControllers(projectid)
        .then( res => {
            if (res.status !== 200) {
                console.log(res);
            }
            else {
                if(res.data.length === 0) {
                    this.setState({ controllers: controllerExamples });
                }
                else {
                    this.setState({ controllers: res.data });
                }
            }
        })
        .catch(err => {throw err});
  }

  handleAddController() {
    const projectid = this.props.match.params.projectid;
    const reqBody = { controllerName: 'Select View', whenData: '', doData: '', requireData: '' };
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

  handleSaveChange(index) {
      const projectid = this.props.match.params.projectid;
      const controllerid = this.state.controllers[index].id;
      console.log(controllerid)
      console.log(this.state.controllers[index].controller_name);
      const reqBody = {
          controllerName: this.state.controllers[index].controller_name,
          whenData: this.state.controllers[index].when_data,
          doData: this.state.controllers[index].do_data,
          requireData: this.state.controllers[index].require_data
      };

      //Validation

      console.table(reqBody)
      updateProjectController(projectid, controllerid, reqBody)
        .then( res => {
            if (res.status !== 200) {
                console.log(res);
            }
            else{
                console.table(res.config.data)
            }
        })
        .catch(err => {throw err});
  }

  handleControllerNameChange(e, index, value){
        const projectid = this.props.match.params.projectid;
        const controllerid = e.target.id;

        console.log(controllerid)
        const reqBody = {
            controllerName: value,
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
    const projectid = this.props.match.params.projectid;
    const controllers = this.state.controllers;
    const displayControllers = controllers.map(controller => {
        const index = controllers.indexOf(controller);
        return <ControllerItem key={index}  index={index} controllerid={controller.id} controllerName={controller.controller_name} whenData={controller.when_data} doData={controller.do_data} requireData={controller.require_data} handleDeleteController={this.handleDeleteController} handleChangeInput={this.handleChangeInput} handleSaveChange={this.handleSaveChange} projectid={projectid} handleControllerNameChange={this.handleControllerNameChange}/>
    });

    return (

                <div className="controllers-container">
                    <div className="container-wrapper">
                    <div className="controllers-wrapper">
                        <div className="project-section-header"> Controllers </div>
                        <div className="controller-list">

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