import React, { Component } from 'react';

class IdeaField extends Component {

    render() {
        const { index, ideaid, ideaData, handleChangeField, submitChangeField, handleDeleteField } = this.props;
        const field = 'ideas';

        return (
            <div className="ideas-item">
                <section>
                    <label>{(index + 1) + '.'}</label>
                    <input id={ideaid} name="idea_data" value={ideaData} onChange={e => handleChangeField(e, field, index)}/>
                </section>
                <button className="input-complete-btn" id={ideaid} onClick={e => submitChangeField(e, field, index)}> Save </button>
                <button className="delete-x" id={ideaid} onClick={e => handleDeleteField(e, field, index)}> &times; </button>
            </div>
        );
    }
}

export default IdeaField;
