import { Router } from 'express';
import photoControler from './controler.js'

const photoRouter = new Router();

//роути 
photoRouter.get('/:comment', photoControler.getByComment);

export default photoRouter;