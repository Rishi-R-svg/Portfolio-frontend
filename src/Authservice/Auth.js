import axios from "axios";


const sendData = (data)=> {
    return axios.post(`${process.env.BACKEND_URL}/api/v1/contact`,data)
}


export {sendData}