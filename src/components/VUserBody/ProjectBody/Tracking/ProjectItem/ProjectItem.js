import React, { Component } from 'react';
import './projectitem.scss'
import ProjectCard from './ProjectCards/ProjectCard';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { findTrackerCards, deleteTrackerCard, findTrackerCardsPerList, createTrackerCard, updateTrackerCard } from '../../../../../services/project.tracker.services';

class ProjectItem extends Component {
  constructor(props){
    super(props);
    this.state ={
        name: '',
        tasks: [],
        taskName: '',
        isTaskInputOpen: true,
        showText: false
    }
    this.addTaskToggle = this.addTaskToggle.bind(this); 
    this.addTaskItemHandler = this.addTaskItemHandler.bind(this);
    this.removeTaskItemHandler = this.removeTaskItemHandler.bind(this);
    this.findCardsForList = this.findCardsForList.bind(this);
}


findCardsForList(projectid, listid){
  findTrackerCardsPerList(projectid, listid)
  .then(res => {
    if(res.status !== 200) {
      console.log(res);
    }
    else{
      this.setState({ 
        tasks: res.data,
        taskName: ''
      });
    }
  })
}

componentWillMount() {
  const projectid = this.props.projectid;
  const listid = this.props.listid;
  this.findCardsForList(projectid, listid);
}

componentWillReceiveProps(nextProps){
  const projectid = nextProps.projectid;
  const listid = nextProps.listid;
  this.findCardsForList(projectid, listid);
}


addTaskToggle(){
    if(this.state.isTaskInputOpen){
        this.setState({
          isTaskInputOpen: false,
          showText: true
        })
    }
    else {
        this.setState({
          isTaskInputOpen: true,
          showText: false
        })  
    }
}

addTaskItemHandler(){
  let len = this.state.tasks.length;
  let projectid = this.props.projectid;
  let listid= this.props.listid;
  let cardOrder = len + 1;

  let reqBody = {cardName: this.state.taskName, cardData: '', cardOrder, listid};
  createTrackerCard(projectid, reqBody)
    .then(res => {
      console.table(res.data)
      this.findCardsForList(projectid, listid);
    })
    
  this.addTaskToggle();
}

removeTaskItemHandler(id){
  const projectid = this.props.projectid;
  const cardid = id;
  const listid = this.props.listid;
  deleteTrackerCard(projectid, cardid)
    .then( res => {
      if( res.status !== 200 ) {
        console.log(res);
      }
      else {
        this.findCardsForList(projectid, listid)
      }
    })
}

  render() {

    const tasks = this.state.tasks;
    const {removeTrackerListHandle, listid} = this.props;

    let addTaskInput = classnames({
      "add-task-show": true,
      "add-task": this.state.isTaskInputOpen
  })

    let showText = classnames({
      "show-text": true,
      "hide": this.state.showText
    })

    tasks.forEach((card, index) => {
      let cardid = card.id;
      let projectid = card.project_id;
      let body = {
        cardName: card.card_name,
        cardData: card.card_data,
        cardOrder: index+1,
        listid: card.list_id
      }

      console.table(body)

      updateTrackerCard(projectid, cardid, body)
          .then( res => {
            console.table(res.data)
          })
          .catch(err => {throw err})
    });
    
    const displayTasks = this.state.tasks.map((task) =>{
      const index = tasks.indexOf(task);
      return(
        <ProjectCard 
          key={index} 
          index={index} 
          {...task}
          onDeleteTaskClick={this.removeTaskItemHandler} 
        />
      )
    })


    return (
    
      <div className="project-item" onClick={() => console.log(this.props)} >
            <div className="project-item-block">
              <div className="prjt-item-inner">
                  <div className="prjt-item-header"> 
                    <input type="text" placeholder={this.props.listName}/>
                    <span onClick={ (e) => {removeTrackerListHandle(listid)} } > </span>
                  </div>
                  <div className="prjt-item-body">
                    <ul>
                      
                        {displayTasks}

                    </ul>
                  </div>
                  <div className="prjt-item-footer" >
                  <div className={showText} onClick={this.addTaskToggle}><label> Add a task... </label></div>
                    <div className={addTaskInput} >
                      <textarea type="text" value={this.state.taskName} onChange={ (e) => this.setState({
                        taskName: e.target.value
                      })}/>
                      <div className="list-btn-set">
                        <button className="saveTBtn" onClick={this.addTaskItemHandler}> Add </button>
                        <button className="closeTBtn" onClick={this.addTaskToggle}> <span /> </button>
                      </div>
                    </div>
                      
                    </div>
                  </div>
            </div>
            </div>
    );
  }
}

ProjectItem.propTypes = { removeTrackerListHandle: PropTypes.func }
ProjectItem.defaultProps = { removeTrackerListHandle: () => {} }
export default ProjectItem;




