import React, { Component } from  'react';
import '/Users/lambda_school_loaner_167/Desktop/Digital Resume/Side Project/Dice-App/dice-app/src/Die.css';

class Die extends Component {
    render(){
        
        return <i className={`Die fas fa-dice-${this.props.face}`}></i>
    }

    
           
}

export default Die;