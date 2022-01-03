import {useState, useEffect } from 'react';
import utils from '../../Services/NewsUtils';
import { Link } from 'react-router-dom';

import './styles.css';

function NewsComp() {

  const [news, setNews] = useState([]);

  useEffect(() =>{
    const fetchData = async () =>
    {
      let resp = await utils.getNews();
      let newArr = resp.data.sort((a,b) => -a.date.localeCompare(b.date));
      setNews(newArr);
    }
    fetchData();
  }, [])

 
  return (
  <div class="news_container">
    {
    news.map(item => {
     return <div className="flex_item_wrapper" class="news_item">
                  <Link to={"/newsItem/" + item._id}>
                    <div id="release_card_wrapper" class="image">
                      <img key={item._id} src={item.image} alt="news_image" class="image_img" className='news_item_img'></img>
                      <div class="image_overlay" style={{height: '390px'}}>
                          <h4 class="image_title">{item.headline}</h4> 
                          <h4 class="image_title">{item.subheading} </h4> 
                          <p class="image_description" style={{textTransform: 'none', padding: '20px', textAlign: 'center'}}>{item.body}</p>
                      </div>
                    </div>
                  </Link>
              </div>             
    })
    }
  </div>
  );
}

export default NewsComp;