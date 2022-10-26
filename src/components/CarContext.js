import { useEffect,createContext, useReducer } from "react";
export const CarContext = createContext();

export default function ContextProvider({children}){

    const reducer = (state,action)=>{
        switch(action.type)
        {
            case 'toggleOnOff':
                if(!state.started)
                {
                    state.speed+=1;
                    return {...state, started: true};
                }
                else{
                    if(state.speed === 0)
                        return {...state, started: false};
                    return state;
                    }
            case 'accelerate':
                if(state.started)
                    if(state.speed + 5>= 240)
                    state.speed=240;
                    else
                    state.speed+=5;
                return {...state};
            case 'deceleration':
                    if(state.speed>2 && state.started)
                    {
                        state.speed--;
                        console.log('deceleration');
                    }
                    else if(state.speed<3 && state.speed>0 && state.started)
                        state.speed+=2;
                    else if(state.speed===0)
                        return state;
                    return {...state};
            case 'brake':
                if(state.speed-5<0)
                    state.speed = 0;
                else
                    state.speed-=5;
                return {...state}; 
            default:
                break;
        }
        return state
    }
    const [state, dispatchState] = useReducer(reducer, {started: false, speed: 0});

    useEffect(() => {
        state.startAction = function (type){
        state.accelerationInterval =  setInterval(() => {
            dispatchState({type: type})
            console.log('started');
            console.log(this, 'from startAction sI');
          }, type==='brake'?80:150);
        };
        state.stopAction = ()=>{
            clearInterval(state.accelerationInterval);
        }
        console.log('Context');    
      return () => {
      }
    }, [])
    useEffect(() => {
        setInterval(()=>{dispatchState({type: 'deceleration'}); console.log('inside interval');}
        ,400);
//        return ()=> state.clearInterval(state.deceleration);
    }, [])
    
    return (
        <CarContext.Provider value={{state,dispatchState}}>
            {children}
        </CarContext.Provider>
    )
}