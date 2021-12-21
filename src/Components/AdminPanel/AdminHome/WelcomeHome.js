import {useEffect } from 'react';




import './styles.css';


function WelcomeHomeComp(props) {
  
  
 

  useEffect(() =>{
    
  }, [])

 
  return (
    <div className="welcome_home_comp" style={{height: '900px', width: '87%', margin: '50px auto'}}>
      <br/><br/>
      <h1>Hi Sir!</h1> <br/><br/>

      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnAH_VM_Wcm5yE9C6k1WUoU-_vkHrCoFiiFg&usqp=CAU" alt="massage" />

      <br/><br/><br/>
      <h3>Your Wish is My Command</h3>
     
     </div>
     

  );
}

export default WelcomeHomeComp;