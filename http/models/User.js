/* eslint-disable no-param-reassign */
import DayJs from 'dayjs';
import { ObjectID } from 'mongodb';

export default class User {
    name = 'users';

    collection = {};

    static fillable = [
      'id',
      'name',
      'email',
      'birth',
      'phone',
      'img',
    ];

    constructor(database) {
      this.collection = database.collection(this.name);
      this.DayJs = DayJs;
    }

    async get(query, options) {
      await this.setRawBirth(query);

      const cursor = this.collection.find(query, options);
      const users = await cursor.toArray();
      return users;
    }

    async getOne(query, options) {
      if (query && Object.prototype.hasOwnProperty.call(query, 'id')) {
        query = ObjectID(query.id);
      }

      const cursor = this.collection.findOne(query, options);
      const user = await cursor;
      return user;
    }

    static validate(properties) {
      return Object.keys(properties).every((el) => this.fillable.includes(el));
    }

    сastBirth(rawDate) {
      return this.DayJs.unix(rawDate / 1000).format('MM/DD/YYYY');
    }

    async setRawBirth(query) {
      let rawBirth = null;

      if (query && Object.prototype.hasOwnProperty.call(query, 'birth')) {
        const allUsers = this.collection.find();
        if ((await allUsers.count()) > 0) {
          await allUsers.forEach((el) => {
            if (this.сastBirth(el.birth) === query.birth) {
              rawBirth = el.birth;
            }
          });
        }
      }

      if (rawBirth) {
        query.birth = rawBirth;
      }
    }
}
