import express,{Request,Response} from 'express'
import {connections} from '../src/configs/dbConnection'
import {router} from '../src/routers/userRoute'
const app=express(),
PORT=process.env.PORT ||5000

app.use('/',router)

connections()
app.listen(PORT,()=>{
    console.log(`Server Is Running On ${PORT}`)
})