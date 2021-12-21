import { useEffect } from 'react';
import React from 'react';

import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './styles.css';
import FlexPhotosComp from '../FlexGrowGallery/FlexPhotos';
import FlexVideosComp from '../FlexVideoGallery copy/FlexVideos';


function GalleryComp() {

  useEffect(() =>{

  }, [])

 
  return (
  <div id="gallery">
    <div  className="releases-flex-container" style={{width: '100%'}} >
      <nav className='Nav' style={{justifyContent: 'flex-start', alignItems: 'left'}}>
        <NavLink to='/gallery/photos'  className='hover-underline-animation' activeClassName="current" style={{marginLeft: '12px'}} >Photos</NavLink>  &nbsp;
        <NavLink to='/gallery/videos'  className='hover-underline-animation' activeClassName="current">Videos</NavLink>
      </nav>  <br/> <br/>

      <Switch>
          <Route exact path="/gallery"><FlexPhotosComp/></Route>
          <Route path="/gallery/photos" ><FlexPhotosComp/></Route>
          <Route path="/gallery/videos" > <FlexVideosComp/></Route>
      </Switch>   <br/>
    </div>
  </div>
  );
}

export default GalleryComp;