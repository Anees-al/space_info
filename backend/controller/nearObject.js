import axios from "axios";

export const getNearProject=async(req,res)=>{
    try {
    const { start_date = "2026-02-01", end_date = "2026-02-08" } = req.query;
    const response=await axios.get('https://api.nasa.gov/neo/rest/v1/feed',{
        params:{
            start_date,
            end_date,
            api_key:process.env.API_KEY
        }
    })
       const asteroids = Object.values(response.data.near_earth_objects).flat();

    res.status(200).json({message:'successfully fetched',success:true,asteroids})
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}