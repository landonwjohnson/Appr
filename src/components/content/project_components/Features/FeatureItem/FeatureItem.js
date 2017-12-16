import React, { Component } from 'react';

class FeatureItem extends Component {
  render() {
      const {index, featureData, handleChangeFeature, handleSubmitFeature, handleDeleteFeature} = this.props;
    return (
    <div className="features-item">
        <section>
            <label>{(index + 1) + '.'}</label>
            <input value={featureData} onChange={e => handleChangeFeature(e, index)}/>
        </section>
        <button  onClick={() => handleSubmitFeature(index)}> Save </button>
        <button className="delete-x" onClick={() => handleDeleteFeature(index)}> &times; </button> 
    </div>
    );
  }
}

export default FeatureItem