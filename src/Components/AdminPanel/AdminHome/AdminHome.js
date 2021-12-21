import {useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import AdminNewsComp from '../AdminNews/AdminNews';
import AdminReleasesComp from '../AdminReleases/AdminReleases';


import './styles.css';

import EditReleaseComp from '../AdminReleases/EditRelease';
import AddReleaseComp from '../AdminReleases/AddRelease';
import AdminHeaderComp from '../AdminHeader/AdminHeader';
import EditNewsItemComp from '../AdminNews/EditNewsItem';
import AddNewsItemComp from '../AdminNews/AddNewsItem';
import EditAboutComp from '../AdminAbout/EditAbout';
import AdminGalleryComp from '../AdminGallery/AdminGallery';
import AddImageComp from '../AdminGallery/AddImage';
import AddVideoComp from '../AdminGallery/AddVideo';
import WelcomeHomeComp from './WelcomeHome';

function AdminHomeComp(props) {
  
  
 

  useEffect(() =>{
    
  }, [])

 
  return (
    <div className="admin_home_comp">
     <header style={{position: 'sticky', top: '0'}}>
      <AdminHeaderComp/>  
      </header>
           
             <div className="sidebar">
              <NavLink to='/admin/home/releases' activeClassName="current">Manage Releases</NavLink>
              <NavLink to='/admin/home/news' activeClassName="current">Manage News</NavLink>
              <NavLink to='/admin/home/about' activeClassName="current">Manage About/ Subscribe</NavLink>
              <NavLink to='/admin/home/gallery' activeClassName="current">Manage Gallery</NavLink>
        
          </div> 
      <div className="content_box">
        <Switch>
        <Route path="/admin/home/welcome" component={WelcomeHomeComp}></Route>
          <Route path="/admin/home/releases" component={AdminReleasesComp}></Route>
            <Route path="/admin/home/editrelease/:id" ><EditReleaseComp/></Route>
            <Route path="/admin/home/addrelease" ><AddReleaseComp/></Route>
          <Route path="/admin/home/news" component={AdminNewsComp}></Route>
            <Route path="/admin/home/editnewsitem/:id" ><EditNewsItemComp/></Route>
            <Route path="/admin/home/addnewsitem" ><AddNewsItemComp/></Route>
          <Route path="/admin/home/about" ><EditAboutComp/></Route>
          <Route path="/admin/home/gallery"><AdminGalleryComp/></Route>
            <Route path="/admin/home/addImage"><AddImageComp/></Route>
            <Route path="/admin/home/addVideo"><AddVideoComp/></Route>
        </Switch>
       </div>  
     </div>
     

  );
}

export default AdminHomeComp;