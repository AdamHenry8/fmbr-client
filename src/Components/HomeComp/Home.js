import React , {useState, useEffect } from 'react';
import releaseUtils from '../../Services/ReleaseUtils';
import newsUtils from '../../Services/NewsUtils';
import  {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import '../ReleasesComp/styles.css'; 
import './styles.css';

function HomeComp() {

  const [latestReleases, setLatestReleases] = useState([]);
  const [latestNews, setLatestNews] = useState([]);
  const history = useHistory();

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

  const navToNewsItem = (id) => {
    history.push('/newsItem/'+ id);
  }
 
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
        return  <div key={item._id} class="news_item" onClick={() => navToNewsItem(item._id) }>
                    <h3 className="news_headline"> {item.headline} </h3>
                    <p className="news_subheading">{item.subheading}</p> 
                    <div class="img_text_wrapper">
                      <img src={item.image} alt="news-img" class="news_img"></img>
                      <div className='item_body_wrapper'>
                        {item.body.length > 70 ?
                          (
                            <div className="news_item_body">
                              {`${item.body.substring(0, 70)}...`}<span className='underlined'>read more</span>
                            </div>
                          ) :
                          <p className="news_item_body">{item.body}</p>
                        }
                      </div>
                    </div> 
                  </div>
        })
      } 
      
    </div>

    <div id="all_news_arrow"><p><a href="/news">see all news  &rarr; </a></p></div> <br/> 

  </div>
  );
}

export default HomeComp;