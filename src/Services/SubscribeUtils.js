import axios from 'axios';

const url =  "https://fmbr-server.herokuapp.com/api";

const getSubscriptions = () =>
{
    return axios.get(url + "/subscriptions"); 
}

const addSubscription = (newSubscription) =>
{
    return axios.post(url + "/subscriptions/", newSubscription); 
}
const deleteSubscription = (subId) => {
    return axios.delete(url + "/subscriptions/" + subId)
}

const exportedObject = {
    getSubscriptions,
    addSubscription,
    deleteSubscription 
};

export default exportedObject;