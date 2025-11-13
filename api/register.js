// api/register.js - rota serverless para Vercel/Netlify (Node.js)
// Recebe { name, email, password } via POST e insere na coleção 'users'.

const { connectToDatabase } = require('../db');

module.exports = async function (req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ error: 'Missing fields' });
      return;
    }

    const { db } = await connectToDatabase(process.env.DB_NAME || 'ifood_app');
    const users = db.collection('users');

    // Em produção, hashear a senha antes de salvar (bcrypt)
    const result = await users.insertOne({ name, email, createdAt: new Date() });

    res.status(201).json({ ok: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
