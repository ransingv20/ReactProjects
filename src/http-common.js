import axios from 'axios'

export default axios.create({
    baseURL: "http://localhost:8282/api/user",
    headers:{
        "Content-type" : "application/json"
    }
});