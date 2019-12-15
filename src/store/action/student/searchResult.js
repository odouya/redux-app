import { searchStudents } from "../../../services/student";

export const actionTypes = {
  setStudentsAndTotal: Symbol("setStudentsAndTotal"),
  setIsLoading: Symbol("setIsLoading")
};

export function setStudentsAndTotal(arr, total) {
  return {
    type: actionTypes.setStudentsAndTotal,
    payload: {
      datas: arr,
      total
    }
  };
}

export function setIsLoading(isLoading) {
  return {
    type: actionTypes.setIsLoading,

    payload: isLoading
  };
}

// export function fetchStudents() {
//   return async function(dispatch, getState) {
//     dispatch(setIsLoading(true));
//     const condition = getState().students.condition;
//     const resp = await searchStudents(condition);
//     dispatch(setStudentsAndTotal(resp.searchList, resp.cont));
//     dispatch(setIsLoading(false));
//   };
// }

 
export function fetchStudents(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const action = setStudentsAndTotal([{id:1,name:'aaa'},{id:2, name:"bbb"}],2);
            resolve(action)
        }, 1000);
    })
}
