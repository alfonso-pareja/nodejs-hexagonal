import * as express from 'express';
import { buildDependencies } from './infrastructure/http/container';
import { buildRoutes } from './infrastructure/http/routes/routes';
import { ErrorHandlerMiddleware } from '@infrastructure/http/middlewares/errors/errorHandlerMiddleware';

export function createApp() {
  const app = express();
  app.use(express.json());

  const deps = buildDependencies();
  app.use('/api', buildRoutes(deps));


  app.use(ErrorHandlerMiddleware); 
  return app;
}
