

import store from "./index"
import { change } from './action/student/searchCondition'
import { setIsLoading, setStudentsAndTotal, fetchStudents } from './action/student/searchResult'


store.dispatch(change({
    key:"1",
    page:2
}));

store.dispatch(fetchStudents());

// store.dispatch(setStudentsAndTotal([{name:'sss', sex: 2},{name:'ddd',sex:1}], 2))
