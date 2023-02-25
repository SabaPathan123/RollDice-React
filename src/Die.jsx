import React from 'react';
import './Die.css';

function Die(props){

    function checkFace(){
        if(props.faceUp === 1){
            return <i className={`Die fas fa-dice-one ${props.rolling? 'rolling' : ''}`}></i>
        }else if(props.faceUp === 2){
            return <i className={`Die fas fa-dice-two ${props.rolling? 'rolling' : ''}`}></i>
        }else if(props.faceUp === 3){
            return <i className={`Die fas fa-dice-three ${props.rolling? 'rolling' : ''}`}></i>
        }else if(props.faceUp === 4){
            return <i className={`Die fas fa-dice-four ${props.rolling? 'rolling' : ''}`}></i>
        }else if(props.faceUp === 5){
            return <i className={`Die fas fa-dice-five ${props.rolling? 'rolling' : ''}`}></i>
        }else if(props.faceUp === 6){
            return <i className={`Die fas fa-dice-six ${props.rolling? 'rolling' : ''}`}></i>
        }  
    }

    return (
     checkFace()
    );
}

export default Die;