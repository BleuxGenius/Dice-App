import React, { Component } from  'react';
import '/Users/lambda_school_loaner_167/Desktop/Digital Resume/Side Project/Dice-App/dice-app/src/Die.css';

class Die extends Component {
    render(){
        
        return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling && 'shaking'}`}></i>
    }

    
           
}

export default Die;