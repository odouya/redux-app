
import {actionTypes} from '../../action/student/searchCondition'

//default state

const initialState = {
    key:"",
    sex:-1,
    page:1,
    limit:10
}



/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export default function(state = initialState, action){
    switch(action.type){
        case actionTypes.change:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }

}