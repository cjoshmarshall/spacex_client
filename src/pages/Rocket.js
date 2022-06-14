import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {  useLocation } from 'react-router-dom'
import "./Rocket.css"


function Rocket() {

    const [rocket,setRocket]=useState([])
    const [image,setImage]=useState([])
    const [loading,setLoading]=useState(false)

    const location=useLocation()
    const path=location.pathname.split('/')[2]    
    

    useEffect(()=>{
        window.scrollTo(0, 0)
        const getRocket=async ()=>{
            try{
                const res=await axios.get('https://api.spacexdata.com/v3/rockets/'+path)
                setRocket(res.data)
                setImage(res.data.flickr_images)
                setLoading(true)
            }catch(err){
                alert('Something went wrong')
            }
        }
        getRocket()
    },[])
  
    const [index, setIndex] = useState(0) 
    const timeoutRef = useRef(null);
    console.log(timeoutRef)

  
    const resetTimeout=()=>{
      if (timeoutRef.current) {
      }
        console.log(timeoutRef.current)
    }
  
    useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
        ()=>
          setIndex((prevIndex)=>
            prevIndex===image.length-1?0:prevIndex+1
          ),
          3000
      );
  
      return ()=>{
        resetTimeout();
      };
    }, [index]);


  return (
    <>
    {loading?(
    <div className='rocket'>
        <div className='rocket_container1' style={{backgroundImage:`url(${rocket.flickr_images && rocket.flickr_images[1]})`}}>
            <h1 className='rocket_title1'>{rocket.rocket_name}</h1>
        </div>
        <div className='rocket_container2'>
            <p className='rocket_description2 reveal'>{rocket.description}</p>
        </div>
        <div className='rocket_container3' style={{backgroundImage:`url(${rocket.flickr_images && rocket.flickr_images[0]})`}}>
            <div className='rocket_subcontainer3'>
                <h1 className='rocket_subtitle3'>OVERVIEW</h1>
                <table className='rocket_innercontainer3'>
                    <tbody className='rocket_table3'>
                        <tr><td className='reveal'>HEIGHT</td><td className='reveal'>{rocket.height&&`${rocket.height.meters}m/${rocket.height.feet}ft`}</td></tr>
                        <tr><td className='reveal'>WEIGHT</td><td className='reveal'>{rocket.mass&&`${rocket.mass.kg/1000}kg/${rocket.mass.lb/1000}lbs`}</td></tr>
                        <tr><td className='reveal'>DIAMETER</td><td className='reveal'>{rocket.diameter&&`${rocket.diameter.meters}m/${rocket.diameter.feet}ft`}</td></tr>
                        {rocket.payload_weights&&rocket.payload_weights.map((item,index)=>(
                        <tr key={index}>
                            <td className='reveal'>PAYLOAD TO {item.id.toUpperCase()}</td><td className='reveal'>{item&&`${item.kg/1000}kg/${item.lb/1000}lbs`}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='rocket_subcontainer3'>
            <h1 className='rocket_subtitle3'>ENGINE</h1>
                <table className='rocket_innercontainer3'>
                {rocket.engines&&
                <tbody className='rocket_table3'>
                    <tr><td className='reveal'>NO. OF ENGINES</td><td className='reveal'>{rocket.engines.number}</td></tr>
                    <tr><td className='reveal'>ENGINE TYPE</td><td className='reveal'>{rocket.engines.type.toUpperCase()}</td></tr>
                    <tr><td className='reveal'>PROPELLANT 1</td><td className='reveal'>{rocket.engines.propellant_1}</td></tr>
                    <tr><td className='reveal'>PROPELLANT 2</td><td className='reveal'>{rocket.engines.propellant_2}</td></tr>
                    <tr><td className='reveal'>THRUST SEA LEVEL</td><td className='reveal'>{rocket.engines.thrust_to_weight}</td></tr>
                    <tr><td className='reveal'>NO. OF ENGINES LOSS</td><td className='reveal'>{rocket.engines.engine_loss_max}</td></tr>                    
                </tbody>
                }
                </table> 
            </div>            
        </div>
        <div className='rocket_container4'>
            <div className='rocket_subcontainer3'>
                <h1 className='rocket_subtitle3'>FIRST STAGE</h1>
                <table className='rocket_innercontainer3'>
                    {rocket.first_stage&&
                    <tbody className='rocket_table3'>
                        <tr><td className='reveal'>NO. OF ENGINES</td><td className='reveal'>{rocket.first_stage.engines}</td></tr>
                        <tr><td className='reveal'>AMOUNT OF FUEL</td><td className='reveal'>{rocket.first_stage.fuel_amount_tons} ton</td></tr>
                        <tr><td className='reveal'>BURN TIME</td><td className='reveal'>{rocket.first_stage.burn_time_sec} sec</td></tr>
                        <tr><td className='reveal'>REUSABLE</td>{rocket.first_stage.reusable?(<td className='reveal'>YES</td>):(<td className='reveal'>NO</td>)}</tr>
                        {rocket.first_stage.thrust_sea_level&&
                            <tr><td className='reveal'>SEA LEVEL THRUST</td><td className='reveal'>{rocket.first_stage.thrust_sea_level.kN} kN/{rocket.first_stage.thrust_sea_level.lbf/1000} lbf</td></tr>
                        }                        
                        {rocket.first_stage.thrust_vacuum&&
                            <tr><td className='reveal'>VACUUM THRUST</td><td className='reveal'>{rocket.first_stage.thrust_vacuum.kN} kN/{rocket.first_stage.thrust_vacuum.lbf/1000} lbf</td></tr>
                        }
                    </tbody>
                    }
                </table> 
            </div>
            <div className='rocket_subcontainer3'>
                <h1 className='rocket_subtitle3'>SECOND STAGE</h1>
                <table className='rocket_innercontainer3'>
                    {rocket.second_stage&&
                    <tbody className='rocket_table3'>
                        <tr><td className='reveal'>NO. OF ENGINES</td><td className='reveal'>{rocket.second_stage.engines}</td></tr>
                        <tr><td className='reveal'>AMOUNT OF FUEL</td><td className='reveal'>{rocket.second_stage.fuel_amount_tons} ton</td></tr>
                        <tr><td className='reveal'>BURN TIME</td><td className='reveal'>{rocket.second_stage.burn_time_sec} sec</td></tr>
                        <tr><td className='reveal'>REUSABLE</td>{rocket.second_stage.reusable?(<td className='reveal'>YES</td>):(<td className='reveal'>NO</td>)}</tr>
                        <tr><td className='reveal'>PAYLOADS</td><td className='reveal'>{rocket.second_stage.payloads.option_1}, {rocket.second_stage.payloads.option_2}</td></tr>
                        {rocket.second_stage.payloads.composite_fairing&&
                            <tr><td className='reveal'>SEA LEVEL THRUST</td><td className='reveal'>{rocket.second_stage.payloads.composite_fairing.diameter.meters} m/{rocket.second_stage.payloads.composite_fairing.diameter.feet} feet</td></tr>
                        }
                    </tbody>
                    }
                </table> 
            </div>
        </div>
        <div className='rocket_container5'>
            <div className='rocket_subcontainer5'>
                <div className='rocket_innercontainer5'>
                {rocket.flickr_images && rocket.flickr_images.map(item=>(
                <div className='rocket_imageContainer' key={item}>
                    <img src={item} alt=' ' className='rocket_image' style={{ transform: `translateX(${-index*100}%)`}}/>
                </div>
                ))}
            </div></div>
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

export default Rocket