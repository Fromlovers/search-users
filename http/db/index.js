import { MongoClient } from 'mongodb';

export default class databaseClient {
    databaseName = null;

    client = null;

    constructor(uri, databaseName) {
      this.databaseName = databaseName;
      this.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    }

    async connectToDatabase() {
      try {
        await this.client.connect();
        console.log('READY CONNECTION');
      } catch (e) {
        console.log(e);
        throw e;
      }
    }

    getDatabase() {
      return this.client.db(this.databaseName);
    }

    async closeConnection() {
      await this.client.close();
    }
}
