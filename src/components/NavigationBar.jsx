import React from 'react'
import './NavigationBar.css'
import myvideo from '../assets/C.png'
function NavigationBar() {
  return (
    <div className='nav'>
        <div className='logo'><img src={myvideo}></img></div>
        <div className='nav-links'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#About Me">About</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavigationBar