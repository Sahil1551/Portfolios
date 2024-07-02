import React from 'react'
import '../index.css'
import profilePhoto from '/ProfilePhoto.jpg';
const scrollToProjects=()=>{
    document.getElementById('project').scrollIntoView({behavior:'smooth'})
}
const Home = () => {
  return (
    
    <div className='content'>
       <div className='Name '>
        <h1 className='kanit-semibold name1'>Sahil Chhabra</h1>
        <h1 className='oswald-unique name2'><b>Full Stack <br></br>Web Developer</b></h1>
      <button className="home-button" onClick={scrollToProjects}>View My work</button>
      </div> 
        <div className='Image-container'>
            <img className='Image' src={profilePhoto} alt="Profile" />
        </div>
    </div>
  )
}

export default Home
