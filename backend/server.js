import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import nearObjectRoute from './routes/nearObjectRoute.js'



const app=express();
dotenv.config()

app.use(cors())
app.use(express.json())

app.use('/api/nearobject/',nearObjectRoute)





const port=process.env.PORT;
app.listen(port,()=>console.log(`server is running in the port ${port}`));