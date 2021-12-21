import axios from 'axios';

const url = "https://fmbr-server.herokuapp.com/api";

const getAbout = () =>
{
    return axios.get(url + "/about"); 
}
const updateAbout = (id, updatedAbout) =>
{
    return axios.put(url + "/about/" + id, updatedAbout); 
}

const exportedObject = {
    getAbout,
    updateAbout,
};

export default exportedObject;