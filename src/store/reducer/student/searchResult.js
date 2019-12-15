
import {actionTypes}  from "../../action/student/searchResult"

//default state

const initialState = {
    students:[],
    total: 0,
    isLoading:false
}



/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function(state = initialState, action){
    switch(action.type){

        case actionTypes.setStudentsAndTotal:
            return{
                ...state,
                students:action.payload.datas,
                total:action.payload.total
            }
        case actionTypes.setIsLoading:
            console.log(action.payload);
            return {
                ...state,
                isLoading :action.payload
            }

        default:
            return state;
    }
   
}

