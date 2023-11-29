require('dotenv').config();
// @ts-ignore
import express, {NextFunction,Request,Response} from "express"
export const app=express();

// @ts-ignore
import cors from "cors"
// @ts-ignore
import cookieParser from "cookie-parser"


import {ErrorMiddleware} from "./middleware/error";

// body parser
app.use(express.json({limit:"50mb"}))

// Cookie Parser
app.use(cookieParser());

// cors=>cors origin resource sharing
app.use(cors({origin:process.env.ORIGIN}));

// Testing api
app.get("/test",(req:Request, res:Response,next:NextFunction)=>{
    res.status(200).json({
        success:true,
        message:"API is working"
    })
})

// Unknown

app.all("*",(req:Request, res:Response, next:NextFunction)=>{
    const err=new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode=404;
    next(err);
});

app.use(ErrorMiddleware)

