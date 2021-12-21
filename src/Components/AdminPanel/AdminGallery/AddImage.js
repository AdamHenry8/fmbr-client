import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import GalleryUtils from '../../../Services/GalleryUtils';

import './styles.css';

function AddImageComp(props) {
  
  const history = useHistory(); 
 
  const [title , setTitle ] = useState('');
  const [image_url , setImageUrl ] = useState('');

  useEffect(() =>{
    async function fetchData()
    {
     
    }
    fetchData()
  }, [])

  const AddNewImage = async (e) => {
    e.preventDefault();
    let newImage = {title: title, original: image_url, thumbnail: image_url};
    let resp = await GalleryUtils.addNewImage(newImage);
    alert(resp.data);
    history.push('/admin/home/gallery');
  }
 
 
  return (
  <div className="add_item_comp" id="add_image">   
    <form id="add_image_form" class="admin_edit_forms" onSubmit={e => AddNewImage(e)}>
      <h2>Add Image To Gallery</h2><br/>
      <table>
        <tr>
          <th>Title and Credit &nbsp;  </th>
          <td>
            <div className="input-wrapper">
              <input type="text" id="title" name="title" onChange={e => setTitle(e.target.value)}/> 
            </div>
          </td>
        </tr>
        
        <tr>
          <th> Image URL &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="image_url"  name="image_url" onChange={e => setImageUrl(e.target.value)}/>
              </div>
            </td>
        </tr>        
      </table> 
       <button type="submit" class="admin_panel_buttons">Add New Image</button> 
    </form>
  </div>
    
  );
}

export default AddImageComp;