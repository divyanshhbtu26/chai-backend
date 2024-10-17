// require ('dotenv').config({path:'./env'})
import  dotenv from 'dotenv';

// import mongoose from 'mongoose';
// import {DB_NAME} from '/constants'

dotenv.config({
    path:'./env'
})

import connectDB from './db/index';
connectDB()

















/*
import express from 'express'
const app=express()

;(async()=>{
    try {
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error",()=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log('App is listening on Port ${process.env.PORT');
        })
    } catch (error) {
        console.log("ERROR:",error)
        throw error
    }
})()
*/