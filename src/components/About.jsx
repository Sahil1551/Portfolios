import React, { useEffect, useState } from 'react';
import '../index.css'
import Image from'/8771935.jpg'
import Image1 from '/Image1.jpg'
import Static from './Static'

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

      <h2 className='p kanit-semibold'>Front-End Technologies :</h2>
      <Static technology="React" percentage={60} animate={isAnimated} />
      <Static technology="HTML " percentage={80} animate={isAnimated} />
      <Static technology="CSS " percentage={70} animate={isAnimated} />
      <Static technology="Bootstrap " percentage={70} animate={isAnimated} />
      <Static technology="JS" percentage={75} animate={isAnimated} />
      <Static technology="TailWindCSS" percentage={60} animate={isAnimated} />
       <br /><h2 className='p kanit-semibold'>Back-end Technologies</h2>     
       <Static technology="Python" percentage={70} animate={isAnimated} />
       <Static technology="Node.js" percentage={70} animate={isAnimated} />
       <Static technology="Express" percentage={60} animate={isAnimated} />
       <Static technology="Django" percentage={65} animate={isAnimated} />
        <br />
        <h2 className='p kanit-semibold'>Databases</h2>
        <Static technology="MongoDB" percentage={70} animate={isAnimated} />
              
<br />

      </div>
    </div>
    
    </>
  )
}

export default About
