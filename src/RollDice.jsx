import React, { useState } from 'react';
import Die from './Die.jsx';
import './RollDice.css';

function RollDice(){
    const [face1,setFace1] = useState(1);
    const [face2,setFace2] = useState(1);
    const [isRolling,setIsRolling] = useState(false);

    function roll(){
        setIsRolling(true);
        const side1 = Math.floor(Math.random()*6)+1;
        const side2 = Math.floor(Math.random()*6)+1;

        setFace1(side1);
        setFace2(side2);
        
        setTimeout(() => {
            setIsRolling(false);

        },1000);
    }

    return (<div className='RollDice'>
        <div className="container">
            <Die faceUp={face1} rolling={isRolling}/>
            <Die faceUp={face2} rolling={isRolling}/>
        </div>
        <button onClick={roll} disabled={isRolling}>{isRolling ? 'Rolling...' : 'Roll Dice!'}</button>
    </div>)
};

export default RollDice;