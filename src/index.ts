import { createServer } from 'http';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import  app  from './app';
import { PORT } from './shared/config/env.config';
const port = PORT || 3001;

(async () => {
  createConnection().then(() => console.log('Database Connection Successful'));
  createServer(app).listen(port, () => console.info(`Server running on port ${port}`));
})();
