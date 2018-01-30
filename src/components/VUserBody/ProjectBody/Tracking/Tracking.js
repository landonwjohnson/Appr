import React, { Component } from 'react';
import './tracking.scss'
import ProjectItem from './ProjectItem/ProjectItem';
import classnames from "classnames";
import { findTrackerLists, deleteTrackerList } from '../../../../services/project.tracker.services';


class Tracking extends Component {
          constructor(props){
            super(props);
            this.state ={
                isAddListInputOpen: false,
                lists: [],
                listName: ''
            }
            this.openListToggle = this.openListToggle.bind(this); 
            this.closeListToggle = this.closeListToggle.bind(this); 

            this.addTrackerListHandle = this.addTrackerListHandle.bind(this);
            this.removeTrackerListHandle = this.removeTrackerListHandle.bind(this);
        }

      scrollToBottom = () => {
        this.listEnd.scrollIntoView({ behavior: "smooth" });
    }
componentWillMount(){
  const projectid = this.props.projectid;
  findTrackerLists(projectid)
    .then( res => {
      if (res.status !== 200) {
        console.log(res);
      }
      else {
        this.setState({ lists: res.data });
      }
    })
}
  //Add List Button methods
  openListToggle(e){
    this.setState({isAddListInputOpen: true})
          console.log("input show");
  }

  closeListToggle(e){
    this.setState({isAddListInputOpen: false})
          console.log("input show");
  }


  //Trackerlist add remove methods
  addTrackerListHandle(){


    let TrackingList = this.state.lists;
    TrackingList.push({
      name: this.state.listName
    })
    this.setState({
      isAddListInputOpen: false,
      trackerLists: TrackingList,
      listName: '',
    })

    this.scrollToBottom();
  }

  removeTrackerListHandle(e, index){
    const projectid = this.props.projectid;
    const listid = this.state.lists[index].id;
    const list_order = this.state.lists[index].list_order;
    deleteTrackerList(projectid, listid, list_order)
      .then(res => {
        if( res.status !== 200) {
          console.log(res);
        }
        else{
          const newState = this.state.lists;
          newState.splice(index, 1);
          this.setState({ lists: newState })
        }
      })
      .catch(err => {throw err});
  }
  
  render() {
    const { userid, projectid } = this.props.match.params;
    const lists = this.state.lists
    
    console.log(this.state.listName);
    console.table(this.state.lists);

    const displayTrackerLists= this.state.lists.map( (list) => {
      const index = lists.indexOf(list);
      return(
        <ProjectItem key={`tracker-list-${index}`} index={index} lists={lists} list_order={list.list_order} listid= {list.listid} PutInTrashClick={this.removeTrackerListHandle} listName={list.list_name} listid={list.id} projectid={this.props.projectid} />
      )
    })
   

    var addListToggleClass = classnames({
        "add-list--after":  this.state.isAddListInputOpen, 
        "add-list--before" : true
    })
    return (
        <div className="tracking-container">
        <div className="project-header">
            <label>Tracker</label>
         
          </div>
          <div className="tracking-wrapper">
          
             
                <div className="project-items-container" id="project">
                    {displayTrackerLists}
        
                    <div className="add-list-wrapper" ref={(el) => { this.listEnd = el; }}>
                          <div className={addListToggleClass} onFocus={this.openListToggle}>
                            <div className="add-list-content">
                              <input placeholder="Add a list..." value={this.state.listName} onChange={ (e) => this.setState({
                                listName: e.target.value
                              })} /> 
                              <div className="add-list-btn-set">
                                <button className="saveTBtn" onClick={this.addTrackerListHandle}> Save </button>
                                <button className="closeTBtn" onClick={this.closeListToggle}> <span />  </button>
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



export default Tracking;

