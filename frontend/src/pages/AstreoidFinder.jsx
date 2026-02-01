import React from 'react'
import bg from '../assets/astreoidbg.jpg'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios  from 'axios'
const AstreoidFinder = () => {
    const [nearObjects,setNearObjects]=useState([]);
    const [startDate, setStartDate] = useState("2015-09-07");
    const [endDate, setEndDate] = useState("2015-09-08");
    useEffect(()=>{
        const fetchObjects=async()=>{
            try {
                const res=await axios.get('http://localhost:3000/api/nearobject/getnearobject',{params:{start_date: startDate, end_date: endDate}});
                setNearObjects(res.data.asteroids)
                console.log(res.data.asteroids)
            } catch (error) {
                
            }
        }
        fetchObjects()
    },[startDate,endDate])
  return (
    <div style={{backgroundImage:`url(${bg})`,backgroundSize:'cover'}} className='flex flex-col min-h-screen audiowide'>
        <Nav/>
          <div className='flex flex-col p-10'>
            <div className='flex flex-col gap-8 w-auto sm:w-[800px] h-[200px] p-10 bg-white/10 rounded-lg shadow-lg shadow-gray-600 font-semibold text-white font-mono'>
              <label className='flex flex-row gap-4'>
                Start Date
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className='border border-gray-600 p-2 rounded-lg'/>

               
              </label>
              <label className='flex flex-row gap-4'>
                End Date
                 <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className='border border-gray-600 p-2 rounded-lg'/>
              </label>
        </div>


    <div className='flex flex-row items-center justify-center p-4 rounded-lg bg-white/10 font-semibld mt-10'>
       <p className='text-white'> {nearObjects.length}</p>
    </div>

        <div className='grid grid-cols-1 sm:grid-cols-4 mt-10 gap-10'>
            {nearObjects.map((object,index)=>(
                <div className='flex flex-col p-2 w-[300px] h-[200px] rounded-lg shadow-gray-700 bg-white/10 shadow-lg  '>
                       <p className='text-center font-semibold text-white'>{object.name}</p>
                       <div className='flex flex-col gap-2  text-white p-5 '>
                        <p className='text-sm'>Size: {object.estimated_diameter.meters.estimated_diameter_max.toFixed(1)} m</p>
                        <p className='text-xs font-mono'>Distance: {parseFloat(object.close_approach_data[0].miss_distance.kilometers).toFixed(0)} km</p>
                        <p className='text-xs font-mono'>Close Approach date:{object.close_approach_data[0].close_approach_date_full}</p>
                        {
                            object.is_potentially_hazardous_asteroid?<p className='p-2 bg-red-500/30 rounded-lg text-white shadow-lg'>Potentially Hazardous</p>:<p className='p-2 bg-green-500/30 rounded-lg text-white shadow-lg'>Non hazardus</p>
                        }

                       </div>
                </div>
            ))}
        </div>

          </div>

        
        <Footer/>
    
      
    </div>
  )
}

export default AstreoidFinder
