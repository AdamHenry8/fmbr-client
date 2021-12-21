import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import ReleaseUtils from '../../../Services/ReleaseUtils';

import './styles.css';

function AddReleaseComp(props) {
  
  const history = useHistory(); 
 
  const [name , setName ] = useState('');
  const [serial_name , setSerialName ] = useState('');
  const [artist , setArtist ] = useState('');
  const [artwork , setArtwork ] = useState('');
  const [pciArr, setPciArr] = useState([])
  const [audio_src , setAudioSrc ] = useState('');
  const [buy_album_url , setBuyAlbumUrl ] = useState('');
  const [release_date , setReleaseDate ] = useState('');
  const [description , setDescription ] = useState('');
  const [notes , setNotes ] = useState('');

  useEffect(() =>{
    async function fetchData()
    {
     
    }
    fetchData()
  }, [])

  const createNewRelease = async (e) => {
    e.preventDefault();
    let newRelease = {name: name, serial_name: serial_name, artist: artist, artwork: artwork, pci: pciArr, audio_src: audio_src, 
    buy_album_url: buy_album_url, release_date: release_date, description: description, notes: notes}
    let resp = await ReleaseUtils.addNewRelease(newRelease);
    alert(resp.data);
    history.push('/admin/home/releases');
  }
 
 
  return (
  <div className="add_item_comp" id="add_release">
    <form id="add_release_form" class="admin_edit_forms" onSubmit={e => createNewRelease(e)}>
      <h2>Add Release</h2><br/>
      <table>
        <tr>
          <th>Release Name &nbsp;  </th>
          <td>
            <div className="input-wrapper">
              <input type="text" id="name" name="name" onChange={e => setName(e.target.value)}/> 
            </div>
          </td>
        </tr>
        <tr>
          <th> Serial Name &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="serial_name"  name="serial_name" onChange={e => setSerialName(e.target.value)}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Artist &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="artist" name="artist" onChange={e => setArtist(e.target.value)}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Artwork Img URL &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text"  id="artwork" name="artwork" onChange={e => setArtwork(e.target.value)}/>
              </div>
            </td>
        </tr>

        <tr>
          <th> Physical Copy Images &nbsp;  </th>
            <td>
              <div className="input-wrapper">
              <textarea rows="5" type="text" id="pci" name="pci"  onChange={e => setPciArr(e.target.value.split(","))}/>
                
              </div>
            </td>
        </tr>

        <tr>
          <th> Audio Source BC code &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="audio_src"  name="audio_src" onChange={e => setAudioSrc(e.target.value)}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Buy Album URL &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="buy_album_url" name="buy_album_url" onChange={e => setBuyAlbumUrl(e.target.value)}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Release Date yyyy-mm-dd &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="release_date" name="release_date" onChange={e => setReleaseDate(e.target.value)}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Description &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <textarea rows="5" type="text" id="description" name="description" onChange={e => setDescription(e.target.value)}/>
              </div>
            </td>
        </tr>
        <tr>
          <th> Notes &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <textarea rows="5" type="text" id="notes" name="notes"  onChange={e => setNotes(e.target.value)}/>
              </div>
            </td>
        </tr>
      </table>
      <button type="submit" class="admin_panel_buttons">Create New Release</button> 
    </form>
  </div>
  );
}

export default AddReleaseComp;