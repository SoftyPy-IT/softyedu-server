import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import cookieParser from 'cookie-parser';

import router from './app/routes';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/error-handling';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
// app.use(cors({origin:['http://localhost:5173']}));
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  }),
);

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('School management start successful.');
});

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
