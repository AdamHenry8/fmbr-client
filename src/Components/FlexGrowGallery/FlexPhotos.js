import React , {useState, useEffect } from 'react';
import GalleryUtils from '../../Services/GalleryUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

function FlexPhotosComp() {

  const [lightBoxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState({});
  const [imagesDB, setImagesDB] = useState([]);

  useEffect(() =>{
    async function fetchData()
    {
      let resp1 = await GalleryUtils.getAllGalleryImages();
      setImagesDB(resp1.data);
    }
    fetchData()
  }, [])

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);    
  }

  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }

  const showNext = (e) => {
    e.stopPropagation();
    let imagesArr = imagesDB.map(item => {return item});

    let currentIndex = imagesArr.indexOf(imageToShow);  

    if(currentIndex >= imagesArr.length - 1) {
      setLightBoxDisplay(false);
    } 

    else {
      currentIndex++;   
      let nextImage = imagesArr[currentIndex];
      setImageToShow(nextImage);
    }   
  }

  const showPrev = (e) => {
    e.stopPropagation();
    let imagesArr = imagesDB.map(item => {return item});
    
    let currentIndex = imagesArr.indexOf(imageToShow);  

    if(currentIndex <= 0) {
      setLightBoxDisplay(false);
    } 

  else {
    currentIndex--;   
    let nextImage = imagesArr[currentIndex];
    setImageToShow(nextImage);
  }   
  }           

  return (
  <div>
    <div class="container">
    {imagesDB.map((item,index) => {
    return  <img alt='' src={item.original} style={{}} class="item" data-order={index+1} onClick={() => showImage(item)}/>
    })}
    </div>

    {lightBoxDisplay? 
    <div id='lightbox' onClick={hideLightBox}>
        <button onClick={showPrev} className="lightbox-buttons"><FontAwesomeIcon icon="angle-left" style={{color: 'black',fontSize: '100px'}}/></button>
        <div>
          <p style={{textAlign: 'left', textTransform: 'Capitalize', fontSize: 'smaller', backgroundColor: 'rgba(255, 255, 255, 0.5)'}} className='section_titles'> {imageToShow.title} </p> 
          <img id='lightbox-img' src={imageToShow.original} alt='lightbox-img' style={{maxWidth: '800px'}}/> <br/>
        </div> 
      <button onClick={showNext} className="lightbox-buttons"><FontAwesomeIcon icon="angle-right" style={{color: 'black', fontSize: '100px'}}/></button>
    </div> 
    : '' } 
  </div>
  );
}

export default FlexPhotosComp;