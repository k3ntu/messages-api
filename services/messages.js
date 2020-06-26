const MongoLib = require('../lib/mongo')

class MessagesService {
  constructor() {
    this.collection = 'messages';
    this.mongoDB = new MongoLib();
  }

  async getMessages() {
    const messages = await this.mongoDB.getAll(this.collection);
    return messages || [];
  }

  async getMessage({ messageId }) {
    const movie = await this.mongoDB.get(this.collection, messageId);
    return movie || {};
  }

  async createMessage({ message }) {
    return await this.mongoDB.create(this.collection, message);
  }

  async updateMessage({ messageId, message }) {
    return await this.mongoDB.update(this.collection, messageId, message);
  }

  async deleteMovie({ movieId }) {
    return await this.mongoDB.delete(this.collection, movieId);
  }

  // Challenge 2 - video_23
  async replaceMessage({ messageId, message }) {
    return await this.mongoDB.update(this.collection, messageId, message);
  }
}

module.exports = MessagesService;
