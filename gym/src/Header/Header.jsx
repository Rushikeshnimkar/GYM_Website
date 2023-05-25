import React, { useRef } from 'react'
import '../styles/header.css'
import logo from '../assets/dumble.png'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const nav_links = [
  
  {
    path: '#home',
    display: 'Home',
  },
  {
    path: '#schedule',
    display: 'Schedule',
  },
  {
    path: '#classes',
    display: 'Classes',
  },
 
  

]

const Header = () => {
  const headerRef = useRef(null)

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add('sticky_header')
    } else {
      headerRef.current.classList.remove('sticky_header')
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('scroll', headerFunc)

    return () => window.removeEventListener('scroll', headerFunc)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()

    const targetAttr = e.target.getAttribute('href')
    const location = document.querySelector(targetAttr).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 80,
    })
  }

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav_wrapper'>
          {/* ==== LOGO ==== */}

          <div className='logo'>
            <div className='logo_img'>
              <img src={logo} alt='' />
            </div>
            <h2>FitBody</h2>
          </div>

          {/* ====== Navigation menu ======= */}

          <div className='navigation'>
            <ul className='menu'>
              {nav_links.map((item) => (
                <li className='nav__item'>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ======= nav right ======= */}
          <div className='nav_right'>
            <a className='register_btn' href="#pricing-plan">Membership</a>
            <span className='mobile_menu'>
              <i class='ri-menu-line'></i>
            </span>
          </div>
          <div className='nav_right'>
            <a className='register_btn2' onClick={() => navigate("/approved")}>Notification</a>
            <span className='mobile_menu'>
              <i class='ri-menu-line'></i>
            </span>
          </div>
          <div className='nav_right1'>
            <button className='register_btn1' onClick={() => navigate("/login")} >logout</button>
            <span className='mobile_menu'>
              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
