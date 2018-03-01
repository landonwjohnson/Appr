import React, { Component } from 'react';
import './landing-slider.scss';
import Image1 from '../../../img/landing-slider/workplace1.jpg';
import { Link } from 'react-router-dom'

const display1 = {
    title: 'Plan Your App',
    description: 'Appr lets you work more collaboratively and get more done',
    image: Image1
}

const display2 = {
    title: 'Collaborate',
    description: 'Appr lets you party like a rockstar',
    image: Image1
}

const display3 = {
    title: 'Party on',
    description: 'Appr lets you party like a rockstar',
    image: Image1
}

class LandingSlider extends Component {
    constructor(props){
        super(props);
            this.state = {

            }
        
    }
    render() {
        let displays = [display1, display2, display3]
        console.table(displays)


      return (
      
        <div className="slider-container">
            <div className="slider-header"> </div>
            <div className="outter-text-container">
              <div className="inner-text-container">
                  <div className="text-container">
                      <h1 className="headline-large">
                          {displays[0].title}
                      </h1>
                      <h2 className="headline-desc">
                        {displays[0].description}
                      </h2>
  
                      <Link to="/register"> <button className="register-btn">Sign Up - It's free</button></Link>
                          
                  </div>
              </div>
            </div>
  
            
            <div className="slider-footer">
                    <div className="mobile-footer-btn-set">
                        <Link to="/register" className="mobile-register-btn"> <button > Sign Up </button> </Link>
                        <Link to="/login" className="mobile-login-btn"> <button > Login </button> </Link>
                    </div>
                    <ul className="footer-nav">
                        <li className="v2">OUR TEAM</li>
                        <li className="v2">FEEDBACK</li>
                    </ul>
               
            </div>
            <div className="curtain">
              </div>
            <div className="blackscreen" />
            
        </div>
        
      );
    }
  }
  
  export default LandingSlider;
  