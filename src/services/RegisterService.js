import http from '../http-common'

const create = data =>
{ 
    // console.log("Data added successfully");
    return http.post("/save",data)
   
}

export default {create}