import {useState, useEffect } from 'react';
import utils from '../../Services/SubscribeUtils';

import './styles.css';

function SubscribeComp() {

  const [email, setEmail] = useState("");
  const [signed_up, setSigned_up] = useState(false);

  useEffect(() =>{

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newSubscription = {email: email}
    let resp = await utils.addSubscription(newSubscription);
    console.log(resp.data);
    if(resp.data != null)
    {
      setSigned_up(true);
    }
    setEmail('');
      
  }
 
  return (
  <div className="subscribe_comp">
    <div className="subscribe_wrapper">

      <h2>Subscribe To Our Mailing List</h2> <br/><br/><br/>

      <form id="subscribe_form" onSubmit={e => handleSubmit(e)}>
        <input type="email" required placeholder="Enter Your Email Here" className="subscribe_input" onChange={e => setEmail(e.target.value)} value={email}></input> <br/>
        <input type="submit" className="submit_button"></input>
      </form> 

      <div class="sign_up_terms" style={{textAlign: 'left'}}>
      
      </div> 

      {
      signed_up? 
        <div class="sign_up_notice" style={{textAlign: 'left', color: 'green'}}>
        <p>Thank you, your sign-up request was successful! </p>
        </div> 
      : 
        null
      }
    </div>
  </div>
  );
}

export default SubscribeComp;