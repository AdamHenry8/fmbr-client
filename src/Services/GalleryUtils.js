import axios from 'axios';

const url = "https://fmbr-server.herokuapp.com/api";
//images
const getAllGalleryImages = () =>
{
    return axios.get(url + "/gallery/images"); 
}
const deleteImage = (id) =>
{
    return axios.delete(url + "/gallery/images/" + id)
}
const addNewImage = (newImage) =>
{
   return axios.post(url + "/gallery/images/" , newImage);
}
const updateImage = (id, updatedImageObj) => {
    return axios.put(url + "/gallery/images/" + id, updatedImageObj)
}
//videos
const getAllGalleryVideos = () =>
{
    return axios.get(url + "/gallery/videos"); 
}
const deleteVideo = (id) =>
{
    return axios.delete(url + "/gallery/videos/"+ id)
}
const addNewVideo = (newVideo) =>
{
   return axios.post(url + "/gallery/videos/" , newVideo);
}

const exportedObject = {
    getAllGalleryImages,
    getAllGalleryVideos,
    updateImage,
    deleteImage,
    addNewImage,
    deleteVideo,
    addNewVideo
};

export default exportedObject ;