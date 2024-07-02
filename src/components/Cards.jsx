import React from 'react'
import '../index.css'
const Cards = (props) => {
  return (
    <div className='cards'>
        <img src={props.images} width="150px" alt="" />
      <h2 className='kanit-semibold'>{props.title}</h2>
      <p className='oswald-unique'>{props.Description}</p>
      <a  className='home-button oswald-unique' href={props.href}>View</a>
    </div>
  )
}

export default Cards
