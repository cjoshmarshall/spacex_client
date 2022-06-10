import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import "./Header.css"

function Header() {
  return (
    <>
    <div className='header'>
        <div className='header_container'>
                <Link to="/">
                    <img src={logo} alt=" " className='header_logo' />
                </Link>
        </div>
        <ul className='header_order'>
            <li className='header_list'>
                <Link to="/mission" className='header_link'>
                    MISSION
                </Link>
            </li>
            <li className='header_list'>
                <Link to="/launches" className='header_link'>
                    LAUNCHES
                </Link>
            </li>
            <li className='header_list'>
                <Link to="/rockets" className='header_link'>
                    ROCKETS
                </Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Header