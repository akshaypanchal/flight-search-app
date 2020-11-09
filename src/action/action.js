import {ADD_FLIGHT_DETAILS} from './actionType';


// Returning the action object for adding flight details to the store
export const addFlightDetails = (data) =>{

    console.log("action fired!!");
    console.log(data);
    
    return {
        type: ADD_FLIGHT_DETAILS,
        data:data
    }
}