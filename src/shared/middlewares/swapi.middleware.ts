import {NextFunction, Request, Response} from "express";
import {Helper} from "../utilities/helper.utilites";


export const makeAnonymousVerification = (req:Request,res:Response,next:NextFunction)=>{
    const {comment, movieId}= req.query;
    if ((movieId == null) || (movieId == '') || ((isNaN(Number(movieId))))){
        return Helper.sendFailureResponse(req,res,400, 'Kindly provide an ID')
    }
    // @ts-ignore
    if (comment !== null && comment.length > 500){
        return Helper.sendFailureResponse(req,res,400, 'Comments more than 500 characters');
    }
    next()
}

export const getMovieCommentsVerification =(req:Request,res:Response, next:NextFunction)=>{
    let movieId = req.params.id;
    if (isNaN(Number(movieId))){
        return Helper.sendFailureResponse(req,res,400, 'Kindly provide the movie Id');
    }
    next()
}