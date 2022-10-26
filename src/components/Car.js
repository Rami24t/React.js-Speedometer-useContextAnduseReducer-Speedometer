import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useContext } from "react";
import { CarContext } from "./CarContext";
import BG from "./BG";

export default function Car() {
  const {state,dispatchState} = useContext(CarContext);

  return (
    <>
  <div className="car" style={{textAlign: 'center', filter: state.started ? '' : 'saturate(0%)'}} >
  <ReactSpeedometer value={state.speed} height={180} maxValue={200} />
  <button onClick={()=>dispatchState({type: 'toggleOnOff'})}>ON/OFF</button>
  <button onMouseDown={()=>state.startAction('accelerate')} onMouseLeave={()=>state.stopAction()} onMouseUp={()=>state.stopAction()}>Accelerate</button>
  <button onMouseDown={()=>state.startAction('brake')} onMouseLeave={()=>state.stopAction()} onMouseUp={()=>state.stopAction()}>Brake</button>
  </div>
  <BG />
  </>
  );
}
