import React, { useEffect, useState } from 'react';
import '../index.css'
import Image from'/8771935.jpg'
import Image1 from '/Image1.jpg'
import Static from './Static'
import css from '/919826.png'
import Reacti from '/React-icon.svg.png'
import html from '/HTML5_logo_and_wordmark.svg.png'
import js from '/jslogo.png'
import tl from '/png-transparent-tailwind-css-hd-logo.png'
import python from '/Python-logo-notext.svg.png'
import django from '/download.png'
import node from '/node.png'
import express from '/express.png'
import mongo from '/mongo.png'
const About = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);
  return (
    <>
    <div className='Aboutt'>
      <div className='Abouts'>
      <img src={Image}  className="Image1" alt="" />
      <div className='section'>
      <h1 className='anton-regular h1'>About Me</h1>
      <p className='p kanit-semibold '>I am Sahil Chhabra, a dedicated student pursuing a Bachelor's degree in Computer Science<br></br> at Chandigarh University, Gharuan. <br></br>My academic journey is complemented by a strong passion for technology and a commitment to continuous learning and growth.</p>
      </div>    
      </div>
      <div className='Eduction'>
      <div className='aa'>
      <h1 className='anton-regular h1'>Education</h1>
      <p className='p kanit-semibold '><ul>
<li>
 
Bachelors in Computer Science
Chandigarh University, Gharuan
<br/> Session: 2021-2025
CGPA: 6.16
</li>
<br />
<li>
Intermediate (CBSE)
GMSSS 22A Chandigarh<br/>
Session: 2020-2021
Percentage: 60%
</li>

<br /><li>
  
Matriculation (CBSE)

AKSIPS 65 Mohali
Session: 2018-2019
Percentage: 74.6%</li></ul></p>

      </div>
      <img src={Image1} className="I1" alt="" />

      </div>
      <div className='Skills'>
      <h1 className='anton-regular h1' >Skills</h1>
      
      <h2 className='p kanit-semibold '>Front-End Technologies :</h2>
      <div className='frontend'>
  <img src={Reacti} width={100} alt="React Logo" />
  <img src={css} width={100} alt="CSS Logo" />
  <img src={html} width={100} alt="HTML Logo" />
  <img src={js} width={100} alt="JavaScript Logo" />
  <img src={tl} width={100} alt="Tailwind CSS Logo" />
</div> <h2 className='p kanit-semibold '>Back-End Technologies :</h2>
      <div className='frontend'>
  <img src={python} width={100} alt="React Logo" />
  <img src={django} width={100} alt="CSS Logo" />
  <img src={node} width={100} alt="HTML Logo" />
  <img src={express} width={100} alt="JavaScript Logo" />
</div>        
<h2 className='p kanit-semibold'>Databases</h2>
<div className='frontend'>
  <img src={mongo} width={100} alt="React Logo" />
  
</div>
<br />

      </div>
    </div>
    
    </>
  )
}

export default About
