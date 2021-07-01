import http from '../http-common'

const create = data =>
{ 
    console.log("Data added successfully");
    return http.post("/saveTask",data)
   
}

export default {create}