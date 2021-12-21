import React , {useState, useEffect } from 'react';
import utils from '../../Services/ReleaseUtils';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.css';

function ReleaseComp(props) {

  const [release, setRelease] = useState({});
  const [date, setDate] = useState('');
  const [pci, setPci] = useState([]);

  const [lightBoxDisplay, setLightBoxDisplay] = useState(false);
  const [imageToShow, setImageToShow] = useState('');

  const params = useParams();

  useEffect(() =>{
    async function fetchData()
    {
      let releaseID = params.id;
      let resp = await utils.getRelease(releaseID);
      
      setRelease(resp.data);
      setDate(resp.data.release_date);
      setPci(resp.data.pci)
    }
    fetchData()
  }, [params.id])

  const showImage = (image) => {
    setImageToShow(image); 
    setLightBoxDisplay(true);
    console.log(imageToShow)
  }
  const hideLightBox = () => {
    setLightBoxDisplay(false)
  }
  const showNext = (e) => {
    e.stopPropagation();
    let imagesArr = pci.map(item => {return item});

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
    let imagesArr = pci.map(item => {return item});

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
  <div class="component_wrapper">
    
    <div class="row">
      <div class="column" id="left">
        <div class="image_wrapper">
          <img src={release.artwork} alt="release img"></img> 
          <div className='pci_wrapper'> 
            {pci.map((item,index) => {
              return <div key={index} className='pci_box'><img src={item} alt="" onClick={() => showImage(item)}/> </div>
              })  
            }     
          </div> 
    
          {lightBoxDisplay? 
            <div id='lightbox' onClick={hideLightBox}>
                <button onClick={showPrev} className="lightbox-buttons"><FontAwesomeIcon icon="angle-left" style={{color: 'black',fontSize: '100px'}}/></button>
                  <div>
                    <img id='lightbox-img' src={imageToShow} alt='lightbox-img' style={{maxWidth: '800px'}}/> 
                  </div>
                <button onClick={showNext} className="lightbox-buttons"><FontAwesomeIcon icon="angle-right" style={{color: 'black',fontSize: '100px'}}/></button>
            </div> 
           : '' }
                  
          <span>{release.serial_name} </span> | <span>{date.split("T")[0]}</span>
        </div>
        
        <div class="btn_wrapper">
          <a href={release.buy_album_url} target="_blank" rel="noreferrer"><button type="button" id="btn-111" class="">BUY ALBUM</button></a>  <br/> 
        </div>
      </div>
        
      <div class="column"  id="right">
        <div class="info_wrapper">
          <h3>{release.artist}</h3>
          <h3>{release.name}</h3> <br/>
          <p style={{whiteSpace: 'pre-wrap'}}>{release.description}</p>  <br/><br/>

          <iframe title={release._id}  src={release.audio_src}  
              style={{width: "85%", height: "50px"}} frameborder="0" seamless>
          </iframe>
          <div className="release_notes_wrapper">
          <p style={{whiteSpace: 'pre-wrap'}}>{release.notes}</p>
          </div> 
        </div> 
      </div>
    </div>
  </div>
  );
}

export default ReleaseComp;