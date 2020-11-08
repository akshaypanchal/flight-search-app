import {ADD_FLIGHT_DETAILS} from '../action/actionType';

// default store for application
const defaultState = {
    flightDetails:[]
}

const rootReducer = (state=defaultState, action) =>{
    let newState = {...state};
    
    switch (action.type){
        case ADD_FLIGHT_DETAILS:
            return newState;

        default: return newState;
    }
}

export default rootReducer;