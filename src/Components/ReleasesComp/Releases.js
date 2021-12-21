import React , {useState, useEffect } from 'react';
import utils from '../../Services/ReleaseUtils';
import { Link } from 'react-router-dom';

import './styles.css';

function ReleasesComp() {

  const [releases, setReleases] = useState([]);

  useEffect(() =>{
    async function fetchData()
    {
      let resp = await utils.getReleases();
      setReleases(resp.data);
    }
    fetchData()
  }, [])
 
  return (
  <div id="releases">
    <div class="releases-flex-container" id="release_img_grid_wrapper">
    {
    releases.map(item => {
      return  <div className="flex_item_wrapper">
                  <Link to={"/release/" + item._id}>
                    <div id="release_card_wrapper" class="image">
                      <img key={item._id} src={item.artwork} alt="album_artwork" class="image_img"></img>
                      <div class="image_overlay">
                          <h4 class="image_title">{item.name}</h4> 
                          <h4 class="image_title">{item.artist} </h4> 
                          <p class="image_description">{item.serial_name}</p>
                      </div>
                    </div>
                  </Link>
              </div>           
      })
    }
    </div>
  </div>
  );
}

export default ReleasesComp;