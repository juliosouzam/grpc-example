const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const loaderConfig = require('../config/proto');

const hidraDef = protoLoader.loadSync(
  path.resolve(__dirname, '..', 'pb', 'hidra.proto'),
  loaderConfig
);

const hidra = grpc.loadPackageDefinition(hidraDef);

module.exports = new hidra.UserService(
  'localhost:3334',
  grpc.credentials.createInsecure()
);
