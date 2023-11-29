import {Redis} from "ioredis";
require('dotenv').config();

const redisClient=()=>{
    if(process.env.REDIS_URI){
        console.log(`Redis connected with ${process.env.REDIS_URI}`)
        return process.env.REDIS_URI
    }
    throw new Error("Redis Connection failed")
}

export const redis=new Redis((redisClient()));


