
/**
 * search student condition
 */
export const actionTypes = {
    change:Symbol("change")
}

/**
 * new condition create Action
 * @param {*} newCondition 
 */
export function change(newCondition){
    return {
        type:actionTypes.change,
        payload:newCondition
    }
}