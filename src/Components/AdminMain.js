import {useEffect} from "react";
import { useHistory } from "react-router-dom";
import {Switch, Route} from 'react-router-dom';

import './AdminMain.css';

import AdminLoginComp from "./AdminPanel/AdminLoginComp/AdminLogin";
import AdminHomeComp from "./AdminPanel/AdminHome/AdminHome";
import AdminLogOutComp from "./AdminPanel/AdminLoginComp/LogOut";

function AdminMainComp() {

  const history = useHistory();

  useEffect(() => {
    history.push("/admin/login")
  }, [history]);

  return (
  <div id="admin_main" class="admin_main">
    <Switch>
      <Route path="/admin/login" component={AdminLoginComp}></Route>
      <Route path="/admin/logout" component={AdminLogOutComp}></Route>
      <Route path="/admin/home" component={AdminHomeComp}></Route>
    </Switch>
  </div>
  );
}

export default AdminMainComp;
