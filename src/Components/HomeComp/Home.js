import React , {useState, useEffect } from 'react';
import releaseUtils from '../../Services/ReleaseUtils';
import newsUtils from '../../Services/NewsUtils';
import  {Link} from 'react-router-dom';


import '../ReleasesComp/styles.css'; 
import './styles.css';

function HomeComp() {

  const [latestReleases, setLatestReleases] = useState([]);
  const [latestNews, setLatestNews] = useState([]);


  useEffect(() =>{
    async function fetchData()
    {
      let resp = await releaseUtils.getReleases();
      let newArr = resp.data.sort((a,b) => -a.release_date.localeCompare(b.release_date));
      setLatestReleases(newArr.slice(0,3));

      let resp2 = await newsUtils.getNews();
      let newArr2 = resp2.data.sort((a,b) => -a.date.localeCompare(b.date));
      setLatestNews(newArr2.slice(0,3));    
    }
    fetchData()  
  }, [])

 
  return (
  <div id="home_comp">
    <p className='section_titles'>Latest Releases</p>
    <div class="releases-flex-container" id="release_img_grid_wrapper"  >
      {
        latestReleases.map(item => {
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

    <div><p><a href="/releases">see all releases  &rarr; </a></p></div> <br/>

    <p className='section_titles'>Latest News</p>
    <div className="news_container">
      {
        latestNews.map(item => {
        return  <div className="flex_item_wrapper" class="news_item">
                  <Link to={"/newsItem/" + item._id}>
                    <div id="release_card_wrapper" class="image">
                      <img key={item._id} src={item.image} alt="news_image" class="image_img" className='news_item_img'></img>
                      <div class="image_overlay" style={{height: '390px'}}>
                          <h4 class="image_title">{item.headline}</h4> 
                          <h4 class="image_title">{item.subheading} </h4> 
                          <p class="image_description" style={{textTransform: 'none', padding: '20px', textAlign: 'center'}}>
                          {`${item.body.substring(0, 70)}...`}<span className='underlined'>read more</span>
                          </p>
                      </div>
                    </div>
                  </Link>
                </div>           
        })
      } 
      
    </div>

    <div id="all_news_arrow"><p><a href="/news">see all news  &rarr; </a></p></div> <br/> 

  </div>
  );
}

export default HomeComp;