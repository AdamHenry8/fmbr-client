import {useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router';

import './styles.css';
import NewsUtils from '../../../Services/NewsUtils';

function EditNewsItemComp(props) {
  
  const params = useParams();
  const history = useHistory();

  const [newsItem, setNewsItem] = useState({});

  useEffect(() =>{
    async function fetchData()
    {
      let id = params.id;
      let resp = await NewsUtils.getNewsItem(id);
      setNewsItem(resp.data);
      
    }
    fetchData()
  }, [params.id])

  const update = async (e) => {
    e.preventDefault();
    let resp = await NewsUtils.updateNewsItem(newsItem._id, newsItem)
    alert(resp.data);
    history.push('/admin/home/news');
  }

  return (
  <div className="edit_newsItem_comp">
      
    <form id="edit_NewsItem_form" class="admin_edit_forms" onSubmit={e => update(e)}>
      <h2>Edit News Item</h2><br/>
      <table>
        <tr>
            <th> Publishing Date &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text" id="date" name="date" value={newsItem.date} onChange={e => setNewsItem({...newsItem, date: e.target.value})}/>
                </div>
              </td>
          </tr>
          <tr>
            <th>Headline &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="headline" name="headline" value={newsItem.headline} onChange={e => setNewsItem({...newsItem, headline: e.target.value})}/> 
              </div>
            </td>
          </tr>
          <tr>
            <th> Subheading &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text" id="subheading"  name="subheading" value={newsItem.subheading} onChange={e => setNewsItem({...newsItem, subheading: e.target.value})}/>
                </div>
              </td>
          </tr>
            
          <tr>
            <th> Image URL &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text" id="image" name="image" value={newsItem.image} onChange={e => setNewsItem({...newsItem, image: e.target.value})}/>
                </div>
              </td>
          </tr>
        
          <tr>
            <th> Link &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text"  id="link" name="link" value={newsItem.link} onChange={e => setNewsItem({...newsItem, link: e.target.value})}/>
                </div>
              </td>
          </tr>
            
          <tr>
            <th> Body &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <textarea rows="5" type="text" id="body"  name="body" value={newsItem.body} onChange={e => setNewsItem({...newsItem, body: e.target.value})}/>
                </div>
              </td>
          </tr>
      </table>
      <button type="submit" class="admin_panel_buttons">Update</button> 
    </form>         
  </div>
     

  );
}

export default EditNewsItemComp;