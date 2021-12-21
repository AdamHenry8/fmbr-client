import MainComp from './Components/Main';
import AdminMainComp from './Components/AdminMain';

import { Switch, Route } from 'react-router-dom';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";


library.add(fas, fab);

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route path="/admin" component={AdminMainComp}></Route>
        
        <MainComp/>
        

      
      </Switch>
    
    </div>
  );
}

export default App;
