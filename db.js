// db.js - conexão com MongoDB usando variável de ambiente MONGO_URI
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGO_URI;
if (!uri) {
  console.warn('MONGO_URI não definido. Verifique seu .env ou variáveis de ambiente.');
}

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase(dbName) {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }
  await client.connect();
  cachedClient = client;
  cachedDb = client.db(dbName);
  return { client: cachedClient, db: cachedDb };
}

module.exports = { connectToDatabase };
