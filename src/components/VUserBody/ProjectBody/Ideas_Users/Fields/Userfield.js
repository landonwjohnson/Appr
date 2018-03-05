import React, { Component } from 'react';

class UserField extends Component {

    render() {
        const { index, userfieldid, targetDemoData, skillData, descriptionData, handleChangeField, submitChangeField, handleDeleteField, handleSaveChange } = this.props;
        const field = 'userfields';
        return (
            <div className="users-item" key={`userfield-${index}`}>
                <section>
                    <label>{(index + 1) + '.'}</label>
                    <input id={userfieldid} name="target_demo_data" value={targetDemoData} onChange={e => handleChangeField(e, field, index)} onBlur={e => handleSaveChange(e, field, index)}/>
                    <input id={userfieldid} name="skill_data" value={skillData} onChange={e => handleChangeField(e, field, index)} onBlur={e => handleSaveChange(e, field, index)}/>
                    <input id={userfieldid} name="description_data" value={descriptionData} onChange={e => handleChangeField(e, field, index)} onBlur={e => handleSaveChange(e, field, index)}/>
                </section>
                {/* <button className="input-complete-btn" id={userfieldid} onClick={e => submitChangeField(e, field, index)}> Save </button> */}
                <button className="delete-x" id={userfieldid} onClick={e => handleDeleteField(e, field, index)}> &times; </button>
            </div>
        );
    }
}

export default UserField;
