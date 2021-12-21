import axios from 'axios';

const url =  "https://fmbr-server.herokuapp.com/api";

const getAdmins = () =>
{
    return axios.get(url + "/admins"); 
}

const exportObj = {getAdmins}

export default exportObj;