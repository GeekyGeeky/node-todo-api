import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
export const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to node.js using typescript');
});

export const start = async () => {
    try {
      app.listen(PORT, () => {
        console.log(`REST API on http://localhost:${PORT}/api/v1 ⚡`);
      });
    } catch (e) {
      console.error(e)
    }
  }
  