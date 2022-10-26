import React from 'react'
import { useContext } from 'react'
import { CarContext } from './CarContext';

const BG = () => {
    const {state} = useContext(CarContext);
    return(
        <div className="bg" style={{filter: 'blur('+((state.speed)/100)+'px)'}} />
    );
}

export default BG;
