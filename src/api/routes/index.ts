import express, {Router} from 'express';
import {swapiRoutes} from './swapi.routes';

const router = Router();

router.use('/',swapiRoutes)

export const routerBase: Router = router;