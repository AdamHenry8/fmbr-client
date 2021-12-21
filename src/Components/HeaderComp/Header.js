import React , {useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';

import './styles.css';

function HeaderComp() {

 const [navUlClass, setNavUlClass] = useState(true);
 const history = useHistory();

  useEffect(() =>{
}, [])

  const handleHamburger = () => {
    setNavUlClass(!navUlClass);
  }
  const navHome = () => {
    history.push('/home')
  }
 
  return (
  <header className="Header" id="myHeader"> <br/>
    <nav className='Nav'>
      <img src="images\Full Body Massage Records (6).png" className="logo" id="logo" alt="logo" onClick={navHome} /> 

      <button className="hamburger" id="hamburger" onClick={handleHamburger}>
        <FontAwesomeIcon icon="bars"></FontAwesomeIcon>
      </button> 

      <ul className={navUlClass? 'nav-ul' : 'show'} id="nav-ul">    
        <NavLink to='/home' className='hover-underline-animation' activeClassName="current" >Home</NavLink>
        <NavLink to='/news' className='hover-underline-animation' activeClassName="current">News</NavLink>
        <NavLink to='/releases' className='hover-underline-animation' activeClassName="current">Releases</NavLink>
        <NavLink to='/about' className='hover-underline-animation' activeClassName="current">About</NavLink>
        <NavLink to='/gallery' className='hover-underline-animation'  activeClassName="current">Gallery</NavLink>
        <NavLink to='/Subscribe' className='hover-underline-animation' activeClassName="current">Subscribe</NavLink>
      </ul>
    </nav>
  </header>
  );
}

export default HeaderComp;