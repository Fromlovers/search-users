import cors from 'cors';
import User from './models/User';
import Client from './db/index';

const uri = process.env.URI;
const databaseName = process.env.DATABASE;

let database = null;

export default async (app) => {
  app.use(cors());

  if (!database) {
    try {
      const client = new Client(uri, databaseName);
      await client.connectToDatabase();
      database = client.getDatabase();
    } catch (e) {
      console.log(e);
    }
  }

  app.get('/users', async (req, res) => {
    if (!User.validate(req.query)) {
      res.status(400).json({ error: 'Bad Request' });
      return;
    }

    const user = new User(database);
    res.json({ ...await user.get(req.query) });
  });

  app.get('/user', async (req, res) => {
    if (!User.validate(req.query)) {
      res.status(400).json({ error: 'Bad Request' });
      return;
    }

    const user = new User(database);
    res.json({ ...await user.getOne(req.query) });
  });
};
