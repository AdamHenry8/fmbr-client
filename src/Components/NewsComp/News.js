import {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import utils from '../../Services/NewsUtils';

import './styles.css';

function NewsComp() {

  const [news, setNews] = useState([]);
  const history = useHistory();

  useEffect(() =>{
    const fetchData = async () =>
    {
      let resp = await utils.getNews();
      let newArr = resp.data.sort((a,b) => -a.date.localeCompare(b.date));
      setNews(newArr);
    }
    fetchData();
  }, [])

  const navToNewsItem = (id) => {
    history.push('/newsItem/'+ id);
  }
 
  return (
  <div class="news_container">
    {
    news.map(item => {
    return  <div key={item._id} class="news_item" onClick={() => navToNewsItem(item._id)}>
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
  );
}

export default NewsComp;