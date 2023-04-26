import React, { useState } from 'react'
import './Header.css';
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll';

const Header = () => {
  const mobile = window.innerWidth<=768 ? true:false;
 const[menuOpened,setmenuOpened] = useState(false)
  return (
    <div className="header">
    <img src={Logo} alt="logo" className='logo'></img>
    {menuOpened ===false && mobile==true ? (
      <div style={{backgroundColor:"var(--appColor)",padding:"0.5rem", borderRadius:"5px"}}>
      <img src={Bars} alt='' style={{width:"2rem"}} onClick={()=>setmenuOpened(true)}></img>
      </div>
    ) :(
    <ul className='header-menu'>
        <li>
        <Link onClick={()=>{setmenuOpened(false)}}
        to='Home'
        activeClass='active'
        span={true}
        smooth={true}
        >
        Home </Link></li>
        <li>
        <Link onClick={()=>{setmenuOpened(false)}}
        to='Programs'
        span={true}
        smooth={true}
        >
        Programs </Link></li>
        <li>
        <Link onClick={()=>{setmenuOpened(false)}}
        to='Reasons'
        span={true}
        smooth={true}
        >
        Why US </Link></li>
        <li>
        <Link onClick={()=>{setmenuOpened(false)}}
        to='Plans'
        span={true}
        smooth={true}
        >
        Plans </Link></li>
        <li>
        <Link onClick={()=>{setmenuOpened(false)}}
        to='Testimonials'
        span={true}
        smooth={true}
        >
        Testimonials </Link></li>

    </ul>
    )}
    </div>

  )
}

export default Header