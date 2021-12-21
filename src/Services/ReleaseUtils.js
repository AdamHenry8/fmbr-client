import axios from 'axios';

const url =  "https://fmbr-server.herokuapp.com/api";

const getReleases = () =>
{
    return axios.get(url + "/releases"); 
}

const getRelease = (id) =>
{
   return axios.get(url + "/releases/" + id)
}
const addNewRelease = (newRelease) =>
{
   return axios.post(url + "/releases/" , newRelease)
}
const updateRelease = (id, release) =>
{
    return axios.put(url  + "/releases/"+ id, release)
}
const deleteRelease = (id) =>
{
    return axios.delete(url + "/releases/"+ id)
}

const exportedObject = {
    getReleases,
    getRelease,
    addNewRelease,
    updateRelease,
    deleteRelease  
};

export default exportedObject;