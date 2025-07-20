import axios from "axios";


const sendData = (data)=> {
    return axios.post(`https://portfolio-backend-qqlc.onrender.com/api/v1/contact`,data)
}


export {sendData}