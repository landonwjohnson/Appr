import React, { component, Component } from 'react';

class ViewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { index, viewid, viewName, viewImgUrl, handleChangeView, submitChangeView, handleDeleteViewButton } = this.props;
        return(
            <div className="view-item" key={`idea-${index}`}>
                <section>
                    <label>{(index + 1) + '.'}</label>
                    <input className="view-input-name" type="text" id={viewid} value={viewName} onChange={e => handleChangeView(e, index, "name")} />
                    <input className="view-input-imgurl" type="text" id={viewid} value={viewImgUrl} onChange={e => handleChangeView(e, index, "image_url")} />
                </section>
                <button  id={viewid} onClick={e => submitChangeView(e, index)}>Save</button>
                <span className="delete-x" id={viewid} onClick={e => handleDeleteViewButton(e, index)}>&times;</span> 
            </div>
        );
    }
}

export default ViewItem;