import { createContext, useReducer } from "react";
export const CarContext = createContext();

export default function ContextProvider({children}){

    const reducer = (state,action)=>{
        switch(action.type)
        {
            case 'toggleOnOff':
                if(!state.started)
                    return {...state, started: true};
                else{
                    if(state.speed === 0)
                        return {...state, started: false};
                    return state;
                    }
            case 'accelerate':
                if(state.started)
                    if(state.speed + 5>= 1000)
                    state.speed=1000;
                    else
                    state.speed+=5;
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

    return (
        <CarContext.Provider value={{state,dispatchState}}>
            {children}
        </CarContext.Provider>
    )
}