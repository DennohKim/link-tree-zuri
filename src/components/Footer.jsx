import React from 'react'
import { I4G, Zuri } from '../assets/images'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between gap-8  py-8  '>
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