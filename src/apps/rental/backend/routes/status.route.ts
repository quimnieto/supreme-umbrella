import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import DummyController from '../controller/DummyController';

export const register = (router: Router) => {
  const controller: DummyController = container.get('Apps.rental.controllers.DummyController');
  router.get('/dummy', (req: Request, res: Response) => controller.run(req, res));
};
