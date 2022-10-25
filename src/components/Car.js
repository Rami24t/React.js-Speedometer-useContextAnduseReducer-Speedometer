import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useContext } from "react";
import { CarContext } from "./CarContext";

export default function Car() {

  const {state,dispatchState} = useContext(CarContext);

  return (
  <div className="car" style={{textAlign: 'center', filter: state.started ? '' : 'saturate(0%)'}} >
  <ReactSpeedometer value={state.speed} height={180}  />
  <button onClick={()=>dispatchState({type: 'toggleOnOff'})}>ON/OFF</button>
  <button onClick={()=>dispatchState({type: 'accelerate'})}>Accelerate</button>
  <button onClick={()=>dispatchState({type: 'brake'})}>Brake</button>
  </div>
  );
}
