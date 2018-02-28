import React, { Component } from 'react';
import './settingsmenu.scss';
import Modal from 'react-modal';
import { ModalBox } from '../../../Header/headerStyles';
import ArchiveProject from './modals/ArchiveProject';


export default class SettingsMenu extends Component {
        constructor(props) {
        super(props);
        this.state = {
            archiveModalOpen: false
        };
        this.openArchiveModal = this.openArchiveModal.bind(this);
        this.closeArchiveModal = this.closeArchiveModal.bind(this);
    }

    openArchiveModal(){
        this.setState({archiveModalOpen: true})
    }

    closeArchiveModal(){
        this.setState({archiveModalOpen: false})
    }



    render() {
        let { toggleSettingsMenu, toggleBackgroundMenu } = this.props;

        return (
            <div>
                 
                    <div className='project-settings-header'>
                        <button onClick={(e) => toggleSettingsMenu()}/>
                        <div className="change-settings-title"> Settings </div>
                    </div>
                    
                    <ul className='settings-list'>
                        <li onClick={(e) => toggleBackgroundMenu()}>Change Background</li>
                        <li>Change Name</li>
                        <li onClick={this.openArchiveModal}>Archive Project</li>
                    </ul>

                    <div className='project-background-footer'>
                        <div className="project-sidebar-buttonset">
                        </div>
                        
                    </div>
                
                <Modal
                    isOpen={this.state.archiveModalOpen}
                    onRequestClose={this.closeArchiveModal}
                    className="modal-account-settings-content"
                    style={ModalBox}
                >
                    <ArchiveProject closeArchiveModal={this.closeArchiveModal} />
                </Modal>
            </div>
        )
    }
}