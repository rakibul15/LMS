import ErrorHandler from "../utils/ErrorHandler";
import {Request,Response,NextFunction} from "express";
export const ErrorMiddleware=(err:any, req:Request,res:Response, next:NextFunction)=>{
err.statusCode=err.statusCode || 500;
err.message=err.message || "Internal server error";
// wrong mongodb id error

    if(err.name ==='CastError'){
        const message=`JSon web token is invalid, try again`;
        err=new ErrorHandler(message, 400);
    }
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })

}
