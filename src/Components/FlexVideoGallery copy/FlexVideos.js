import React , {useState, useEffect } from 'react';
import GalleryUtils from '../../Services/GalleryUtils';

import './styles.css';

function FlexVideosComp() {
  
  const [videosDB, setVideosDB] = useState([]);

  useEffect(() =>{
    async function fetchData()
    {
      let resp1 = await GalleryUtils.getAllGalleryVideos();
      setVideosDB(resp1.data);

    }
    fetchData()
  }, [])

  return (
  <div className='container'>
    <div class="container">
      {videosDB.map((item,index) => {
        return  <div className="item"   key={item._id}>                  
                  <iframe 
                  data-order={index+1}
                  width= '300'
                    height="300"
                    src={`https://www.youtube.com/embed/${item.embed_id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  /> 
              </div>
      })}
    </div>
  </div>
  );
}

export default FlexVideosComp;