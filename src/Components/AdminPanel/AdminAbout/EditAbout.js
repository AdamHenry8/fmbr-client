import {useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import AboutUtils from '../../../Services/AboutUtils';
import SubscribeUtils from '../../../Services/SubscribeUtils';

import './styles.css';


function EditAboutComp() {
  
  
  const history = useHistory();

  const [aboutText, setAboutText] = useState({});
  const [subscriptions, setSubscriptions] = useState([]);

  const [requestData, setRequestData] = useState(new Date());

  useEffect(() =>{
    async function fetchData()
    {
      let resp = await AboutUtils.getAbout();
      setAboutText(resp.data[0]);

      let resp2 = await SubscribeUtils.getSubscriptions();
      setSubscriptions(resp2.data);
      
    }
    fetchData()
  }, [requestData])

  const update = async (e) => {
    e.preventDefault();
    let resp = await AboutUtils.updateAbout(aboutText._id, aboutText);
    alert(resp.data);
    history.push('/admin/home');  
  }
  const deleteSub = async (id) => {
    let resp = await SubscribeUtils.deleteSubscription(id);
    alert(resp.data);
    setRequestData(new Date());
  }


 
  return (
  <div className="edit_about_comp" >
    <div id="about_form_wrapper" >
      <form id="edit_about_form" class="admin_edit_forms" onSubmit={e => update(e)}>
        <h2>Edit About Text</h2><br/>
        <textarea rows='5' value={aboutText.body} onChange={e => setAboutText({...aboutText, body: e.target.value})}/>
        <button type="submit" class="admin_panel_buttons">Update</button> 
        </form> 
    </div>   <br/><br/><br/><br/>

    <div id='subs_wrapper' style={{textAlign: 'left', marginLeft: '32px'}}>
      <h2>Subscribers Emails List 	&#40;For Copying	&#41;</h2><br/>
      {subscriptions.map(item => {
        return <span>{item.email}, </span>
      })}     
    </div>

    <div className="admin_panel_table_wrapper" id="subs_table_wrapper" style={{margin:'32px', textAlign:'left'}}> 
      <h2>Subscribers Emails Table	&#40;For Deleting Irrelevant &#41;</h2><br/>
      <table id="subs_table" class="admin_panel_tables" style={{width: '90%',}} >
        <tr>
          <th>Email</th>
          <th>Delete</th>
        </tr>
          {subscriptions.map(item => {
            return <tr key={item._id}>
              <td>{item.email}</td>
              <td><input type="button" onClick={() => deleteSub(item._id)} value="Delete" className="admin_panel_buttons"/></td>
            </tr>
          })}            
      </table> <br/>        
    </div>
     
  </div>
  );
}

export default EditAboutComp;