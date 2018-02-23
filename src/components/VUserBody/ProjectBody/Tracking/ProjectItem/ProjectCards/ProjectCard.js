import React, { Component } from 'react';
import './projectcard.scss'
import editIcon from '../../../../../../img/icons/Pencil-Icon.svg';
import CardView from './modals/CardView';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { findTrackerCard } from '../../../../../../services/project.tracker.services';


const CardViewModalBox = {
  
    overlay : {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      overflow: "hidden",
      width: "100%",
      zIndex: "5"
    },
    content : {
      borderRadius: "4px",
      outline: "none",
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "50%",
      bottom: "50%",
      zIndex: "5"
    }
  };

class ProjectCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      cardViewModalOpen: false,
      cardValue: []

    }

    this.openCardView = this.openCardView.bind(this);
    this.closeCardView = this.closeCardView.bind(this);
  }

  findCard(projectid, cardid){
    findTrackerCard(projectid, cardid)
    .then( res => {
      this.setState({
        cardValue: res.data[0]
      })
    })
  }

  componentWillMount(){
    let {projectid, cardid} = this.props;
    this.findCard(projectid, cardid)
  }


  componentWillReceiveProps(nextProps){
    let {projectid, cardid} = nextProps;
    this.findCard(projectid, cardid)
  }



  openCardView(){
    this.setState({cardViewModalOpen: true})
  }

  closeCardView(){
    this.setState({cardViewModalOpen: false})
  }


  render() {
    let { cardid } = this.props;
    let listName = "test";

    return (


     
      <div onClick={(e) => console.table(this.state.cardValue)}>
            <li onClick={this.openCardView}><label>{this.state.cardValue.card_name}</label><div className="edit-con"><img src={editIcon} alt="edit"/></div></li>
            
            
            <Modal 
              isOpen ={this.state.cardViewModalOpen} 
              onRequestClose={this.closeCardView}
              className="cardview-container"
              style={CardViewModalBox}
            >
              <CardView cardid={cardid} listName={listName} taskName={this.state.cardValue.card_name}   onCloseBtnClick={this.closeCardView} onDeleteTaskClick={this.props.onDeleteTaskClick} />
            </Modal>
            

            
      </div>
                       

                      
                  

   
    );
  }
}

ProjectCard.propTypes = {onDeleteTaskClick: PropTypes.func }
ProjectCard.defaultProps = { onDeleteTaskClick: () => {}}

export default ProjectCard;