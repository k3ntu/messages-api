const MongoLib = require('../lib/mongo')

class CertificatesService {
  constructor() {
    this.collection = 'certificates';
    this.mongoDB = new MongoLib();
  }

  async getCertificates({ dni = '' }) {
    const query = dni && { dni: dni };
    const certificates = await this.mongoDB.getAll(this.collection, query);
    return certificates || [];
  }

  async getCertificate({ certificateId }) {
    const certificate = await this.mongoDB.get(this.collection, certificateId);
    return certificate || {};
  }

  async createCertificate({ certificate }) {
    return await this.mongoDB.create(this.collection, certificate);
  }

  async updateCertificate({ certificateId, certificate }) {
    return await this.mongoDB.update(this.collection, certificateId, certificate);
  }

  async deleteCertificate({ certificateId }) {
    return await this.mongoDB.delete(this.collection, certificateId);
  }

}

module.exports = CertificatesService;
