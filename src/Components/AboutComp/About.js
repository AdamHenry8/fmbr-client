import {useState, useEffect } from 'react';
import AboutUtils from '../../Services/AboutUtils';

import './styles.css';

function AboutComp() {
  
  const [about, setAbout ] = useState({});

  useEffect(() =>{
    async function fetchData()
    {
      let resp =  await AboutUtils.getAbout();
      setAbout(resp.data[0]);
    }
    fetchData();
    
  }, [])
 
  return (
    <div className="about_comp">
      <div  className="about_text_wrapper"> 
        <p style={{whiteSpace: 'pre-wrap'}}>{about.body}</p>
      </div>

      <div className="contact_form_wrapper"> <br/>     
        <h4>Contact Us</h4> <br/>
          <form id="contact_form" action="https://formsubmit.co/full.body.massage.records@gmail.com" method="POST">
            <label for="name">Name</label> <br/>
            <input type="text" id="name" name="name" placeholder="Your name.."/> <br/>

            <label for="email">Email</label> <br/>
            <input type="text" id="email" name="email" placeholder="Your email.."/> <br/>

            <label for="subject">Message</label> <br/>
            <textarea id="subject" name="message" placeholder="Write something.." style={{height: "200px"}}></textarea>

            <input type="submit" value="Submit"/>
          </form>
      </div>
    </div>

  );
}

export default AboutComp;