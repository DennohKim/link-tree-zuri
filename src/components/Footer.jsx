import React from 'react'
import { I4G, Zuri } from '../assets/images'

const Footer = () => {
  return (
    <div className='flex justify-between py-8 '>
        <div>
            <img src={Zuri} alt="Zuri logo" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
            <img src={I4G} alt="I4G logo" />
        </div>
    </div>
  )
}

export default Footer