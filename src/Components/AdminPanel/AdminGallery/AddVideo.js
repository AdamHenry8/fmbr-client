import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import GalleryUtils from '../../../Services/GalleryUtils';


import './styles.css';

function AddVideoComp(props) {
  
  const history = useHistory(); 
 
  const [title , setTitle ] = useState('');
  const [embed_id , setEmbedId ] = useState('');



  useEffect(() =>{
    async function fetchData()
    {
     
    }
    fetchData()
  }, [])

  const AddNewVideo = async (e) => {
    e.preventDefault();
    let newVideo = {title: title, embed_id: embed_id};
    let resp = await GalleryUtils.addNewVideo(newVideo);
    alert(resp.data);
    history.push('/admin/home/gallery');
  }
 
 
  return (
  <div className="add_item_comp" id="add_video">
    <form id="add__video_form" class="admin_edit_forms" onSubmit={e => AddNewVideo(e)}>
      <h2>Add Video To Gallery</h2><br/>
      <table>
        <tr>
          <th>Title  &nbsp;  </th>
          <td>
            <div className="input-wrapper">
              <input type="text" id="title" name="title" onChange={e => setTitle(e.target.value)}/> 
            </div>
          </td>
        </tr>
        
        <tr>
          <th> Embed ID &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="embed_id"  name="embed_id" onChange={e => setEmbedId(e.target.value)}/>
              </div>
            </td>
        </tr>
        </table> 
        <button type="submit" class="admin_panel_buttons">Add New Video</button> 
    </form>
    </div>
    
  );
}

export default AddVideoComp;