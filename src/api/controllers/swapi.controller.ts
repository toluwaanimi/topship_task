import {NextFunction, Request, Response} from 'express';
import {Helper} from '../../shared/utilities/helper.utilites';
import {SwapiService} from '../services/swapi.service';
import "reflect-metadata";


export default class SwapiController {

    /**
     * @description handled getting of movies
     * @param req
     * @param res
     * @param next
     */
    public static async getMovies(req: Request, res: Response, next: NextFunction) {
        const response = await SwapiService.getMovies()
        return Helper.sendSuccessResponse(req, res, 200, 'Successfully retrieved movies', response)
    }

    /**
     * @description get characters
     * @param req
     * @param res
     */
    public static async getCharacters(req: Request, res: Response) {
        const response = await SwapiService.getCharacters(req.query);
        return Helper.sendSuccessResponse(req, res, 200, 'Successful', response)
    }

    /**
     * @description make comment
     * @param req
     * @param res
     * @param next
     */
    public static async makeAnonymous(req: Request, res: Response, next: NextFunction) {
        const ipAddress = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress
        const {movieId, comment} = req.query
        const response = await SwapiService.makeAnonymous({movieId, comment, ipAddress})
        return Helper.sendSuccessResponse(req, res, 200, 'Successful', response)
    }

    /**
     * @description get movie comments
     * @param req
     * @param res
     */
    public static async getMovieComments(req: Request, res: Response) {
        const response = await SwapiService.getMovieComments(Number(req.params.id))
        return Helper.sendSuccessResponse(req, res, 200, 'Successful', response)

    }

    /**
     * @description get all comments
     * @param req
     * @param res
     */
    public static async getComments(req: Request, res: Response) {
        const response = await SwapiService.getComments()
        return Helper.sendSuccessResponse(req, res, 200, 'Successful', response)
    }
}