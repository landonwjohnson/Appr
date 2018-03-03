import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { findProject } from '../../../../../services/project.services';
import { updateProjectRedux } from '../../../../../actions/actionCreators';
import history from '../../../../../history';
import { connect } from 'react-redux';
import { DashItemContainer, DashItemFrame, DashItemBlurOverlay } from './dashItemStyles';

class DashProject extends Component {
    render() {
        const { userid, projectid, projectName, backgroundSource, updateProjectRedux } = this.props;
        function getProject(path){
            findProject(projectid)
            .then( res => {
                if (res.status !== 200) {
                    console.log(res);
                }
                else {
                    updateProjectRedux(res.data[0]);
                    history.push(path)
                }
            })
            .catch(err => {throw err});
        }

        let path = `/user/${userid}/project/${projectid}/ideas`
        return (
            <DashItemContainer onClick={(e) => getProject(path) } >
                <DashItemFrame>
                    <DashItemBlurOverlay backgroundImage={backgroundSource}>
                    <div className="project-thumb-body" />
                    <div className="project-thumb-footer">
                        <label> {projectName} </label>
                    </div>
                    </DashItemBlurOverlay>
                </DashItemFrame>
            </DashItemContainer>
        );
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {updateProjectRedux}) (DashProject);
