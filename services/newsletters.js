const MongoLib = require('../lib/mongo')

class NewslettersService {
  constructor() {
    this.collection = 'newsletter';
    this.mongoDB = new MongoLib();
  }

  async getNewsletters() {
    const newsletters = await this.mongoDB.getAll(this.collection);
    return newsletters || [];
  }

  async getNewsletter({ newsletterId }) {
    const newsletter = await this.mongoDB.getAll(this.collection, newsletterId);
    return newsletter || [];
  }

  async createNewsletter({ newsletter }) {
    return await this.mongoDB.create(this.collection, newsletter)
  }

  async updateNewsletter({ newsletterId, newsletter }) {
    return await this.mongoDB.update(this.collection, newsletterId, newsletter);
  }
}

module.exports = NewslettersService;
