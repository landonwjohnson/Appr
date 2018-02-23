import React, { Component } from 'react';
import './projectitem.scss'
import ProjectCard from './ProjectCards/ProjectCard';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { findTrackerCards, deleteTrackerCard, findTrackerCardsPerList, createTrackerCard } from '../../../../../services/project.tracker.services';

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

componentDidMount() {
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
  let listOrder = this.props.list_order;
  let cardOrderId = len + 1;

  console.log(cardOrderId)
  let reqBody = {cardName: this.state.taskName, cardData: '', cardOrderId, listOrder};
  createTrackerCard(projectid, reqBody)
    .then(res => {
      console.table(res.data)
      this.findCardsForList(projectid, listOrder);
    })
    
  this.addTaskToggle();
}

removeTaskItemHandler(id){
  const projectid = this.props.projectid;
  const cardid = id;
  const list_order = this.props.list_order;
  deleteTrackerCard(projectid, cardid)
    .then( res => {
      if( res.status !== 200 ) {
        console.log(res);
      }
      else {
        this.findCardsForList(projectid, list_order)
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
    
    const displayTasks = this.state.tasks.map((task) =>{
      const index = tasks.indexOf(task);
      return(
        <ProjectCard 
          key={index} 
          index={index} 
          cardid={task.id}
          cardOrderId={task.card_order} 
          listid = {task.list_id} 
          listName={this.props.listName} 
          taskName={task.card_name} 
          onDeleteTaskClick={this.removeTaskItemHandler} 
          projectid={this.props.projectid} />
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





{/* <div className="dotmenu--open">
                    <div className="pop-over-menu">
                        <div className="pop-over-menu-wrapper">
                            <div className="menu-header">
                              <span className="menu-placeholder"></span>
                              <div classname="menu-title">
                                List Actions
                              </div>
                              <span className="delete-x"> &times;</span>
                            </div>
                            <ul>
                              <li>Archive This List</li>
                            </ul>
                        </div>
                    </div>
                    </div> */}