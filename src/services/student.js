

const appkey = "demo13_1545210570249"

/**
 * get students 
 */

export async function getAllStudents(){
    return await fetch(`/api/student/findAll?appkey=${appkey}`)
        .then(resp => resp.json()).then(resp=>resp.data);
}

export async function getStudents(page = 1, limit = 10){
    return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(resp => resp.json()).then(resp=>resp.data);
}

export async function searchStudents({key="", sex = -1,page = 1, limit = 10}){
    return await fetch(`/api/student/searchStudent?appkey=${appkey}&sex=${sex}&search=${key}&page=${page}&size=${limit}`)
        .then(resp => resp.json()).then(resp=>(resp.data));
}