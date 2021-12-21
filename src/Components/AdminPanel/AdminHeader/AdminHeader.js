import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';

import './styles.css';

function AdminHeaderComp(props) {

  const loggedInAdmin = useSelector(state => state.loggedInAdmin)
  const history = useHistory();

  useEffect(() =>{

  }, [])

  const navToLogOut = () => {
    history.push('/admin/logout');
  }

  return (

  <div className="admin_panel_header" style={{borderBottom: '1px solid black'}}>
    <span class="admin_header_left" style={{marginLeft: '12px'}}>
      <span><h4>Full Body Massage Records</h4></span>
    </span>

    <span id="search_wrapper">
      <NavLink to='/admin/home/welcome'><img src='\images\transparentLogo.png' alt='brand_logo' style={{width: '50px', marginTop: '5px'}}></img></NavLink> <br/>
    </span> 

    <span className="admin_header_right" style={{marginRight: '12px'}}>
      Howdy! {loggedInAdmin.full_name} &nbsp; <br/>
      <input type='button' onClick={navToLogOut} value='Logout'></input>
    </span>
  </div>

  );
}

export default AdminHeaderComp;