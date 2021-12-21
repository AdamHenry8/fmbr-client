import {useState, useEffect } from 'react';
import GalleryUtils from '../../../Services/GalleryUtils';
import { useHistory } from 'react-router';

import './styles.css';

function AdminGalleryComp() {
  
  const history = useHistory();
 
  const [imagesDB, setImagesDB] = useState([]);
  const [videosDB, setVideosDB] = useState([]);

  const [requestData, setRequestData] = useState(new Date());

  useEffect(() =>{
    async function fetchData()
    {
      let resp1 = await GalleryUtils.getAllGalleryImages();
      let resp2 = await GalleryUtils.getAllGalleryVideos(); 
      setImagesDB(resp1.data);
      setVideosDB(resp2.data);
    }
    fetchData()
  }, [requestData])

  const deleteImage = async (id) => {
    let resp = await GalleryUtils.deleteImage(id);
    alert(resp.data);
    setRequestData(new Date()); 
  }
  const deleteVideo = async (id) => {
    let resp = await GalleryUtils.deleteVideo(id);
    alert(resp.data);
    setRequestData(new Date()); 
  }
  const navToAddImage = () => {
    history.push('/admin/home/addImage');
  }
  const navToAddVideo = () => {
    history.push('/admin/home/addVideo');
  }
 
  return (
  <div className="admin_panel_comp" id="admin-gallery">
    <div className="admin_panel_table_wrapper" id="images_table_wrapper">
      <h4 style={{float: 'left'}}>Manage Images</h4> <br/>
        <button class="admin_panel_buttons" onClick={navToAddImage}>Click Here To Add a New Image</button> 
        <table id="images_table" className="admin_panel_tables">
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Preview</th>          
            <th>Delete</th>
          </tr>
            {imagesDB.map(item => {
              return <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.original}</td>
                <td ><img alt='prev_img' src={item.original} style={{width: '60px', height: '100%', display: 'block'}}/></td>
                
                <td><input type="button" onClick={() => deleteImage(item._id)} value="Delete" className="admin_panel_buttons"/></td>
              </tr>
            })}            
        </table> <br/>
    </div>

    <div className="admin_panel_table_wrapper" id="videos_table_wrapper">
      <h4 style={{float: 'left'}}>Manage Videos</h4> <br/>
      <button class="admin_panel_buttons" onClick={navToAddVideo}>Click Here To Add a New Video</button> 
        <table id="videos_table" className="admin_panel_tables">
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Preview</th>
            <th>Delete</th>
          </tr>
            {videosDB.map(item => {
              return <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.embed_id}</td>
                <td > <iframe
                      width="253"
                      height="120"
                      src={`https://www.youtube.com/embed/${item.embed_id}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    /> </td>
                <td><input type="button" onClick={() => deleteVideo(item._id)} value="Delete" className="admin_panel_buttons"/></td>
              </tr>
            })}            
        </table> <br/>
    </div>
  </div>     

  );
}

export default AdminGalleryComp;