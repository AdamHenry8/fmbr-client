import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import ReleaseUtils from '../../../Services/ReleaseUtils';

import './styles.css';

function AdminReleasesComp(props) {
  
  const history = useHistory(); 
 
  const [releasesDB, setReleasesDB] = useState([]);
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() =>{
    async function fetchData()
    {
      let resp = await ReleaseUtils.getReleases();
      setReleasesDB(resp.data);
    }
    fetchData()
  }, [requestData])

  const deleteRelease = async (id) => {
    let resp = await ReleaseUtils.deleteRelease(id);
    alert(resp.data);
    setRequestData(new Date()); //for data refresh after deleting item
  }

  const navToAddRelease = () => {
    history.push('/admin/home/addrelease');
  }
 
  return (
  <div className="admin_panel_comp" id="releases">
    <button class="admin_panel_buttons" onClick={navToAddRelease}>Click Here To Add a New Release</button>
    <div className="admin_panel_table_wrapper" id="releases_table_wrapper"> 
      <table id="releases_table" class="admin_panel_tables" >
        <tr>
          <th>Name</th>
          <th>Serial Name</th>
          <th>Artist</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
          {releasesDB.map(item => {
            return <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.serial_name}</td>
              <td>{item.artist}</td>
              <td><Link to={"/admin/home/editrelease/" + item._id} className="admin_panel_buttons">Edit</Link></td>
              <td><input type="button" onClick={() => deleteRelease(item._id)} value="Delete" className="admin_panel_buttons"/></td>
            </tr>
          })}            
      </table> <br/>
    </div>  
  </div>
  );
}

export default AdminReleasesComp;