import {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ReleaseUtils from '../../../Services/ReleaseUtils';
import { useHistory } from 'react-router';

import './styles.css';

function EditReleaseComp(props) {
  
  const params = useParams();
  const history = useHistory();

  const [release, setRelease] = useState({});
  const [date, setDate] = useState('');
  const [pciArr, setPciArr] = useState([]);
  
  useEffect(() =>{
    async function fetchData(props)
    {
      let id = params.id;
      let resp = await ReleaseUtils.getRelease(id);
      setRelease(resp.data);
      setDate(resp.data.release_date);
      setPciArr(resp.data.pci);
    }
    fetchData()
  }, [params.id])

  const update = async (e) => {
    e.preventDefault();
    console.log(pciArr);
    let updatedRelease = {...release, pci: pciArr}
    let resp = await ReleaseUtils.updateRelease(release._id, updatedRelease)
    alert(resp.data);
    history.push('/admin/home/releases'); 
  }
 
  return (
  <div className="edit_release_comp">  
    <form id="edit_release_form" class="admin_edit_forms" onSubmit={e => update(e)}>
    <h2>Edit Release</h2><br/>
      <table>
        <tr>
          <th>Release Name &nbsp;  </th>
          <td>
            <div className="input-wrapper">
              <input type="text" id="name" name="name" value={release.name} onChange={e => setRelease({...release, name: e.target.value})}/> 
            </div>
          </td>
        </tr>
        <tr>
          <th> Serial Name &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="serial_name"  name="serial_name" value={release.serial_name} onChange={e => setRelease({...release, serial_name: e.target.value})}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Artist &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="artist" name="artist" value={release.artist} onChange={e => setRelease({...release, artist: e.target.value})}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Artwork &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text"  id="artwork" name="artwork" value={release.artwork} onChange={e => setRelease({...release, artwork: e.target.value})}/>
              </div>
            </td>
        </tr>

        <tr>
          <th> Physical Copy Images &nbsp;  </th>
            <td>
              <div className="input-wrapper">
              <textarea rows="5" type="text" id="pci" name="pci" value={pciArr.toString()} onChange={e => setPciArr(e.target.value.split(","))}/>
                
              </div>
            </td>
        </tr>
        
        <tr>
          <th> Audio Source &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="audio_src"  name="audio_src" value={release.audio_src} onChange={e => setRelease({...release, audio_src: e.target.value})}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Buy Album URL &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="buy_album_url" name="buy_album_url" value={release.buy_album_url} onChange={e => setRelease({...release, buy_album_url: e.target.value})}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Release Date &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="release_date" name="release_date" value={date.split("T")[0]} onChange={e => setDate(e.target.value)}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Description &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <textarea rows="5" type="text" id="description" name="description" value={release.description} onChange={e => setRelease({...release, description: e.target.value})}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Notes &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <textarea rows="5" type="text" id="notes" name="notes" value={release.notes} onChange={e => setRelease({...release, notes: e.target.value})}/>
              </div>
            </td>
        </tr>
      </table>
      <button type="submit" class="admin_panel_buttons">Update</button> 
    </form>  
  </div>
     

  );
}

export default EditReleaseComp;