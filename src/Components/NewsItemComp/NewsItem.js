import React , {useState, useEffect } from 'react';
import utils from '../../Services/NewsUtils';
import { Link, useParams } from 'react-router-dom';

import './styles.css';

function NewsItemComp(props) {

  const [newsItem, setNewsItem] = useState({});
  const [date, setDate] = useState('');
  const params = useParams();

  useEffect(() =>{
    async function fetchData()
    {
      let newsItemID = params.id;
      let resp = await utils.getNewsItem(newsItemID);
      
      setNewsItem(resp.data)
      setDate(resp.data.date);
    }
    fetchData()
  }, [params.id])

  return (
  <div class="component_wrapper">
    <div class="row">
      <div class="column" id="left">
        <div class="image_wrapper">
          <img src={newsItem.image} alt="release img"></img> 
        </div> 
      </div>
        
      <div class="column"  id="right">
        <div class="info_wrapper">
          <h3 className='news_headline'>{newsItem.headline}</h3> <br/>
          <h4>{newsItem.subheading}</h4> <br/>
          <span>{date.split("T")[0]}</span>  <br/><br/> 
          <p style={{whiteSpace: 'pre-wrap'}}>{newsItem.body}</p>  <br/><br/>

          <div className="release_notes_wrapper">
          <p style={{whiteSpace: 'pre-wrap'}}><Link to={{pathname: newsItem.link}} target='_blank'>Click Here To Find Out More</Link></p>
          </div>
        </div> 
      </div>
    </div>
  </div>  
  );
}

export default NewsItemComp;