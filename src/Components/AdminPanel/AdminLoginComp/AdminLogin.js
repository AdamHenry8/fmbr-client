import {useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'; 

import LoginUtils from '../../../Services/LoginUtils';
import './styles.css';

function AdminLoginComp() {

  //Data from user input
  const [ fullName, setFullName ] = useState("");
  const [ password, setPassword ] = useState("");

  //Data from server
  const [adminsDB, setAdminsDB ] = useState([]);

  //Auth
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [warningNotice, setWarningNotice] = useState('');

  //History for navigation
  const history = useHistory();

  // redux hooks connection
  const dispatch = useDispatch();

  useEffect(() =>{
    async function fetchData()
    {
      let resp = await LoginUtils.getAdmins();
      setAdminsDB(resp.data);
      setIsAuthenticated(false); 
      console.log(isAuthenticated);
    }
    fetchData()
  }, [isAuthenticated])

  const Login = () => {
    
    let logInAdmin = adminsDB.filter(x => x.full_name === fullName && x.password === password);
    if(logInAdmin[0])
    {
      setIsAuthenticated(true);
      
      history.push('/admin/home/welcome');
      dispatch({type: 'setLoggedInAdmin', payload: logInAdmin[0] }); 
    }
    else
    {
      console.log('wrong details, not able to log in...');
      setWarningNotice('*wrong details, not able to log in');
    }

  }  

  return (
  <div className="login_comp" >
    <div className="login_wrapper" >
      <img src='\images\transparentLogo.png' alt='brand_logo' style={{width: '50px', marginTop: '5px'}}></img>
      <h6>FBMR Admin Login</h6> <br/>
        <label for="full_name">Full Name: </label> &nbsp;
        <input type="text" id="full_name" name="full_name" onChange={e => setFullName(e.target.value)}/> <br/><br/>

        <label for="password">Password: </label> &nbsp;
        <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/> <br/><br/>

        <input type="button"  value="Login" onClick={Login} /> <br/><br/>
      
        <div style={{display: 'block', margin: '0 auto', backgroundColor: 'pink', width: '160px', alignItems: 'center'}}>
          <h6 style={{color: 'red'}}>{warningNotice}</h6>
        </div>
    </div>  
  </div>
  );
}

export default AdminLoginComp;