import {useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import utils from '../../Services/NewsUtils';
import { Link } from 'react-router-dom';

import './styles.css';

function NewsComp() {

  const [news, setNews] = useState([]);
  // const history = useHistory();

  useEffect(() =>{
    const fetchData = async () =>
    {
      let resp = await utils.getNews();
      let newArr = resp.data.sort((a,b) => -a.date.localeCompare(b.date));
      setNews(newArr);
    }
    fetchData();
  }, [])

  // const navToNewsItem = (id) => {
  //   history.push('/newsItem/'+ id);
  // }
 
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
    // return  <div key={item._id} class="news_item" onClick={() => navToNewsItem(item._id)}>
    //           <h3 className="news_headline"> {item.headline} </h3>
    //           <p className="news_subheading">{item.subheading}</p> 

    //           <div class="img_text_wrapper">
    //             <img src={item.image} alt="news-img" class="news_img"></img>
    //             <div className='item_body_wrapper'>
    //               {item.body.length > 70 ?
    //                 (
    //                 <div className="news_item_body">
    //                   {`${item.body.substring(0, 70)}...`}<span className='underlined'>read more</span>
    //                 </div>
    //                 ) :
    //                 <p className="news_item_body">{item.body}</p>
    //               }
    //             </div>
    //           </div>     
    //         </div>       
    })
    }
  </div>
  );
}

export default NewsComp;