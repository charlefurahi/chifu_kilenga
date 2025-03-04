import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './HeroSection.css'
import myvix from '../assets/MaryChalesk.jpg'

function HeroSection() {
    return (
        <div className='hero-section'>
            <div className='left'>
                <h1>Hello I'm Charles, 

                    <span>
                        <Typewriter words={[' Engineer',' Organist',' Websites Developer',' Electronic Devices seller']} loop cursor cursorStyle="_" typeSpeed={100} delaySpeed={1000} deleteSpeed={50}>
                        </Typewriter>
                    </span>
                </h1>
                <h2>

                    Hi, I'm Charles kileng'a, a passionate Organist, Software Developer, and a dedicated student at the University of Dar es Salaam. I'm currently pursuing a BSc in Computer Engineering and Information Technology (CEIT), where I blend my technical expertise with creativity.
                </h2>
            </div>
            <div className='right'><img src={myvix}></img></div>
        </div>
    )
}

export default HeroSection