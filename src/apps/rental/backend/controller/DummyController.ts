import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class DummyController implements Controller {
  async execute(req: Request, res: Response) {
    const response: { [key: string]: string } = { Ok: 'Everything Done!' };
    res.status(httpStatus.OK).send(response);
  }
}
