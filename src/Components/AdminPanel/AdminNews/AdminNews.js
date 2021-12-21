import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import NewsUtils from '../../../Services/NewsUtils';

import moment from 'moment';



import './styles.css';

function AdminNewsComp(props) {
  
  const history = useHistory(); 
 
  const [newsDB, setNewsDB] = useState([]);
  const [requestData, setRequestData] = useState(new Date());

  useEffect(() =>{
    async function fetchData()
    {
      let resp = await NewsUtils.getNews();
      setNewsDB(resp.data);
    }
    fetchData()
  }, [requestData])

  

  const deleteNewsItem = async (id) => {
    let resp = await NewsUtils.deleteNewsItem(id);
    alert(resp.data);
    setRequestData(new Date()); //for data refresh after deleting item
  }

  const navToAddNewsItem = () => {
    history.push('/admin/home/addnewsitem');
  }
 
  return (
  <div className="admin_news_comp">
    <button class="admin_panel_buttons" onClick={navToAddNewsItem}>Click Here To Add a New News Item</button>
    <div className="news_table_wrapper"> 
      <table id="news_table">
        <tr>
          <th>Headline</th>
          <th>Subheading</th>
          <th>Publishing Date</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
          {newsDB.map(item => {
            return <tr key={item._id}>
              <td>{item.headline}</td>
              <td>{item.subheading}</td>
              <td>{moment(item.date).format("MMM Do YY")}</td>
              <td><Link to={"/admin/home/editnewsitem/" + item._id} className="admin_panel_buttons">Edit</Link></td>
              <td><input type="button" onClick={() => deleteNewsItem(item._id)} value="Delete" className="admin_panel_buttons"/></td>
            </tr>
          })}            
      </table> <br/>
    </div>  
  </div>
     

  );
}

export default AdminNewsComp;