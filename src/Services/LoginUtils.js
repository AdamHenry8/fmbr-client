import axios from 'axios';

const url = "http://localhost:9000/api";

const getAdmins = () =>
{
    return axios.get(url + "/admins"); 
}

const exportObj = {getAdmins}

export default exportObj;