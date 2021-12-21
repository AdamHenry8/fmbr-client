import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import NewsUtils from '../../../Services/NewsUtils';

import './styles.css';

function AddNewsItemComp(props) {
  
  const history = useHistory(); 
 
  const [date , setDate ] = useState('');
  const [headline , setHeadline ] = useState('');
  const [subheading , setSubheading ] = useState('');
  const [image , setImage ] = useState('');
  const [link , setLink ] = useState('');
  const [body , setBody ] = useState('');


  useEffect(() =>{
    async function fetchData()
    {
     
    }
    fetchData()
  }, [])

  const createNewNewsITem = async (e) => {
    e.preventDefault();
    let newNewsItem = {date: date, headline: headline, subheading: subheading, image: image, link: link, 
    body: body}
    let resp = await NewsUtils.addNewNewsItem(newNewsItem)
    alert(resp.data);
    history.push('/admin/home/news');
  }
 
 
  return (
    <div className="add_newsItem_comp">
          <form id="add_newsItem_form" class="admin_edit_forms" onSubmit={e => createNewNewsITem(e)}>
          <h2>Add News Item</h2><br/>
        <table>
          <tr>
            <th>Date YYYY-MM-DD &nbsp;  </th>
            <td>
              <div className="input-wrapper">
                <input type="text" id="date" name="date" onChange={e => setDate(e.target.value)}/> 
              </div>
            </td>
          </tr>
          
          <tr>
            <th> Headline &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text" id="headline"  name="headline" onChange={e => setHeadline(e.target.value)}/>
                </div>
              </td>
          </tr>
          
          <tr>
            <th> Subheading &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text" id="subheading" name="subheading" onChange={e => setSubheading(e.target.value)}/>
                </div>
              </td>
          </tr>
           
          <tr>
            <th> Image URL &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text"  id="image" name="image" onChange={e => setImage(e.target.value)}/>
                </div>
              </td>
        
          </tr>
         
          <tr>
            <th> Link &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <input type="text" id="link"  name="link" onChange={e => setLink(e.target.value)}/>
                </div>
              </td>
          </tr>
           
          <tr>
            <th> Body &nbsp;  </th>
              <td>
                <div className="input-wrapper">
                  <textarea rows="5" type="text" id="body" name="body" onChange={e => setBody(e.target.value)}/>
                </div>
              </td>
          </tr>
         
         </table> 

         <button type="submit" class="admin_panel_buttons">Create New News Item</button> 

      </form>
     </div>
     

  );
}

export default AddNewsItemComp;