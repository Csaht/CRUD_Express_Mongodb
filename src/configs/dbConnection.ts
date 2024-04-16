//Mongo db connection with node js this is commen file


import { error } from "console";
import mongoose,{connect} from "mongoose";

// const {MongoClient}=require('mongodb');
// const url='mongodb://localhost:27017';
// const database='DATABASE_CREATION_TEST'
// const clint=new MongoClient(url)
// async function dbConnect(){
//     let result= await clint.connect()
//     console.log("db connection--->",result)
//     let db=result.db(database)
//     return db.collection('testOne');
// }
// module.exports = dbConnect 

export const connections=()=>{
    return connect('mongodb://localhost:27017/DATABASE_CREATION_TEST')
    .then(()=>{
        console.log(`Db Connected`)
    }).catch((err:any)=>{
        console.log("Db Error",err)
    })
}