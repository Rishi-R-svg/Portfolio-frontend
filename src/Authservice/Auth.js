import axios from "axios";


const sendData = (data)=> {
    return axios.post('api/v1/Contact',data)
}


export {sendData}