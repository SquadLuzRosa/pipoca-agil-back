import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();


const app = express();


app.use(cors());
app.use(express.json());

routes(app);


module.exports = app;