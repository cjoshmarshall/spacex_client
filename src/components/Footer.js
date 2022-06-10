import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer_container'>
            <p className='footer_title'>SPACEX@2022</p>
            <ul className='flex justify-between w-[80%] footer_order'>
                <li><Link to="" className='footer_list'>FACEBOOK</Link></li>
                <li><Link to="" className='footer_list'>TWITTER</Link></li>
                <li><Link to="" className='footer_list'>YOUTUBE</Link></li>
                <li><Link to="" className='footer_list'>INSTAGRAM</Link></li>
                <li><Link to="" className='footer_list'>LINKEDIN</Link></li>
                <li><Link to="" className='footer_list'>PRIVACY POLICY</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer