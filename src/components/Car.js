import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useContext } from "react";
import { CarContext } from "./CarContext";
import BG from "./BG";

export default function Car() {
  const {state,dispatchState} = useContext(CarContext);

  return (
    <>
  <div className="car" style={{textAlign: 'right', filter: state.started ? '' : 'saturate(0%)'}} >
  <button style={{}} onClick={()=>dispatchState({type: 'toggleOnOff'})}>ON/OFF</button>
  <ReactSpeedometer value={state.speed} height={180} maxValue={200} />
  <button style={{padding: '30px 2px', margin: '0 36px'}} onMouseDown={()=>state.startAction('brake')} onMouseLeave={()=>state.stopAction()} onMouseUp={()=>state.stopAction()}>Brake</button>
  <button style={{padding: '64px 14px', margin: '0 36px'}} onMouseDown={()=>state.startAction('accelerate')} onMouseLeave={()=>state.stopAction()} onMouseUp={()=>state.stopAction()}>Gas</button>
  </div>
  <BG />
  </>
  );
}
