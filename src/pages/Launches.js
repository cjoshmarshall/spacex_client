import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Launches.css"

function Launches() {

  const [launches,setLaunches]=useState([])
  const [loading,setLoading]=useState(false)
  const [items,setItems]=useState(6)


  useEffect(()=>{
    window.scrollTo(0, 0)
    const getLaunches=async ()=>{
      try{
        const res=await axios.get("https://api.spacexdata.com/v3/launches")
        setLaunches(res.data)
        setLoading(true)
      }
      catch(err){
        alert('Something went wrong')
      }
    }
    getLaunches()
  },[])

  const handleLoad=()=>{
    setItems(items+6)
  }

  return (
    <>
    {loading?(
    <div className='launches'>
      <div className='launches_container1'>
        <h1 className='launches_title1'>LAUNCHES</h1>
      </div>
      <div className='launches_container2'>
        <div className='launches_subcontainer2'>
          <p className='launches_description2 reveal'>Over the course of time, we have establish a total number of 110 launches with 80 landings.</p>
          <p className='launches_description2 reveal'>SpaceX's Falcon 9 will almost certainly be the most-launched rocket of this year.</p>
        </div>
      </div>
      <div className='launches_container3'>
        <div className='launches_subcontainer3'>
        <h2 className='launches_title3'>OUR MISSIONS</h2>
        <div className='launches_innercontainer3'>
        {launches.map((item,index)=>(
            <div className='launches_bordercontainer3' key={index}>
              <h2 className='launches_name reveal'>{item.mission_name}</h2>
              <h3 className='launches_date reveal'>{moment(item.launch_date_utc).format('MMM DD YYYY')}</h3>
              <img src={item.links.mission_patch} alt=' ' className='launches_image reveal' />
              <div className='launches_buttonContainer3 reveal'>
                <Link to={`/launches/${item.flight_number}`}><button>LEARN MORE</button></Link>
              </div>
            </div>
          )).splice(0,items)}
          </div>
          <div className='launches_moreContainer'>
            <button onClick={handleLoad}>MORE LAUNCHES</button>
          </div>
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

export default Launches