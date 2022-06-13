import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Rockets.css"

function Rockets() {

  const [rockets,setRockets]=useState([])
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    window.scrollTo(0, 0)
    const getRockets=async ()=>{
      try{
        const res=await axios.get("https://api.spacexdata.com/v3/rockets")
        setRockets(res.data)
        setLoading(true)
      }
      catch(err){
        alert('Something went wrong')
      }
    }
    getRockets()
  },[])


  return (
    <>
    {loading?(
    <div className='rockets'>
      <div className='rockets_container1'>
        <h1 className='rockets_title1'>ROCKETS</h1>
      </div>
      <div className='rockets_container2'>
        <div className='rockets_subcontainer2'>
          {rockets.map(item=>(
            <div className='rockets_innercontainer2' key={item.id}>
              <div className='rockets_bordercontainer2'>
                <h2 className='rockets_name reveal'>{item.rocket_name}</h2>
                {item.flickr_images.map(item=>(
                    <img src={item} alt=' ' className='rockets_image reveal' />
                )).slice(0,1)}
                <div className='rockets_buttonContainer reveal'>
                  <Link to={`/rockets/${item.rocket_id}`}><button>LEARN MORE</button></Link>
                </div>
              </div>
          </div>
          ))}
        </div>
      </div>
    </div>
    ):(
    <div className='loader'>
      <div className='spinner'></div>
    </div>
    )}
    </>
  )
}

export default Rockets