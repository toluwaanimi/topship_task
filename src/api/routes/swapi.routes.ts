import express, {Router} from 'express';
import SwapiController from '../controllers/swapi.controller';
import {makeAnonymousVerification, getMovieCommentsVerification} from "../../shared/middlewares";
const router = Router();

router.get('/movies', SwapiController.getMovies)
router.get('/character', SwapiController.getCharacters)
router.get('/comment',makeAnonymousVerification, SwapiController.makeAnonymous);
router.get('/comment/movies/:id',getMovieCommentsVerification, SwapiController.getMovieComments)
router.get('/comments',SwapiController.getComments)
export const swapiRoutes: Router = router
