import * as bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan'
import {routerBase} from './api/routes';
// import errorMiddleware from "./shared/middlewares/errorHandler";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use('/', routerBase)
app.use(cors());
// app.use(errorMiddleware)

export default app;