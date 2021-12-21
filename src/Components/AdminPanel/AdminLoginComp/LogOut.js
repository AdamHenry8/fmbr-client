import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'; 

function AdminLogOutComp() {

  
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch({type: 'setLoggedInAdmin', payload: {}}); 
    console.log('I was in log out!')
    history.push('/admin/login');
  }, [dispatch,history]);

  return (
   null   
  );
}

export default AdminLogOutComp;