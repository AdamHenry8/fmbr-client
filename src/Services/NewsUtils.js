import axios from 'axios';

const url =  "https://fmbr-server.herokuapp.com/api";

const getNews = () =>
{
    return axios.get(url +"/news"); 
}

const getNewsItem = (id) =>
{
   return axios.get(url+ "/news/" + id);
}
const addNewNewsItem = (newNewsItem) =>
{
   return axios.post(url + "/news/" , newNewsItem);
}
const updateNewsItem = (id, newItem) =>
{
    return axios.put(url + "/news/"+ id, newItem);
}
const deleteNewsItem = (id) =>
{
    return axios.delete(url + "/news/"+ id);
}

const exportedObject = {
    getNews,
    getNewsItem,
    addNewNewsItem,
    updateNewsItem,
    deleteNewsItem  
};
export default exportedObject;