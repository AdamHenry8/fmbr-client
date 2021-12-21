import React , {useEffect} from 'react';
import { Switch, Route } from 'react-router';

import HeaderComp from './HeaderComp/Header';
import HomeComp from './HomeComp/Home';
import NewsComp from './NewsComp/News';
import ReleasesComp from './ReleasesComp/Releases';
import ReleaseComp from './ReleaseComp/Release';
import AboutComp from './AboutComp/About';
import SubscribeComp from './SubscribeComp/Subscribe';

import './Main.css';
import GalleryComp from './GalleryComp/Gallery';
import NewsItemComp from './NewsItemComp/NewsItem';

function MainComp() {

  useEffect(() =>{

  }, [])

  return (  
  <div style={{width:'78%', margin:'auto', paddingTop:'3%'}} id="main" className='main'>
    <div id="header">
      <header style={{width: "100%", display: 'block', marginBottom: '80px'}}>
        <HeaderComp/>
      </header>
    </div>
    
    <div className='content-container' id="push" style={{overFlow: 'auto'}}>
      <Switch>
        <Route exact path="/" component={HomeComp}></Route>
        <Route path="/home" component={HomeComp}></Route>
        <Route path="/news" component={NewsComp}></Route>
        <Route path="/newsItem/:id" component={NewsItemComp}></Route>
        <Route path="/releases" component={ReleasesComp}></Route>
        <Route path="/release/:id" component={ReleaseComp}></Route>
        <Route path="/about" component={AboutComp}></Route>
        <Route path="/gallery" component={GalleryComp}></Route>
        <Route path="/subscribe" component={SubscribeComp}></Route>
      </Switch>
    </div>

    <footer class="site_footer" id="footer">
      <div class="row">
        <div className="footer_column" id="left">
          <span>&copy;Full Body Massage Records {(new Date().getFullYear())}| website by <a href="https://adambennun.com/" target="_blank"  rel="noreferrer" style={{margin: '0', padding:'0'}}>The Scorpio Dragon agency </a> </span>
        </div>
        <div className="footer_column" id="right">
          <div className="footer_social_menu">
            <a href="https://fullbodymassagerecords1.bandcamp.com/" target="_blank" rel="noreferrer">bandcamp</a>
            <a href="https://www.facebook.com/fullbodymassagerecords/" target="_blank" rel="noreferrer">facebook</a>
            <a href="https://soundcloud.com/full-body-massage-records" target="_blank" rel="noreferrer">soundcloud</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default MainComp;
