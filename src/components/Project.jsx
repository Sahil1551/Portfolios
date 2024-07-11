import React from 'react'
import '../index.css'
import BlissBakerss from'/Projects/BLISSBAKERSS.png'
import Mancot from '/Projects/MANCOT.png'
import Cards from './Cards'
const Project = () => {
  return (
    <div id='project' className='Projects'>
      
      <h1 className='kanit-semibold'>Projects</h1>
      <div className='ss'>
      <div className='card-container'>
      <Cards images={Mancot} title="Mancot" href="https://frontend-snowy-pi-75.vercel.app/" Description="Mancot is a street style brand developed using the MERN stack (MongoDB, Express.js, React, and Node.js). The website showcases a dynamic catalog, enabling customers to explore and purchase trendy apparel online. It features a user-friendly shopping cart, secure checkout, and an admin dashboard for managing products, orders, and customer interactions, ensuring a seamless and efficient shopping experience."/>
      </div>
      <div className='card-container'>
      <Cards images={BlissBakerss} title="Bliss Bakerss" href="https://b-bfrontend.vercel.app/" Description="Bliss Bakerss is a delightful bakery founded by Ms. Divya Chhabra, offering a range of delicious cakes, cupcakes, and pastries. The website features an elegant catalog where customers can explore and order handcrafted treats. With a focus on quality and taste, Bliss Bakers ensures a wonderful online shopping experience."/>
      </div>
      </div>
    </div>
  )
}

export default Project
