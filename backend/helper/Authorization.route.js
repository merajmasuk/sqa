require('dotenv').config();
const express = require('express');
const authenticationRouter = express.Router();
const jwt = require('jsonwebtoken');
const User = require("../models/user.model");

authenticationRouter.post('/jwt', async (req, res) => {
    const user = req.body;
    if (!user) {
        return res.status(400).send('User data is missing');
    }
    const token = jwt.sign(user, process.env.ACCESS_TOKEN, { expiresIn: '1h' });
    res.status(200).send({ token });
})

const verifyJWT = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ error: true, message: 'unauthorized access' });
    }
    const token = authorization.split(' ')[1]; // Extract the token from the header
    jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
        if (error) {
            return res.status(403).send({ error: true, message: error.message });
        }
        req.decoded = decoded;
        next();
    });
}


const verifyAdmin = async (req, res, next) => {
    const email = await req.decoded.email;
    const query = { email: email };
    const user = await userCollection.findOne(query);
    if (user?.role !== 'admin') {
      return res.status(403).send({ error: true, message: 'forbidden message' });
    }
    next();
  };

  authenticationRouter.get('/admin/:email', verifyJWT, async (req, res) => {
    const email = req.params.email;
    if (req.decoded.body.email !== email) {
      res.status(400).send({ admin: false });
      return;
    }
    const existingUser = await User.findOne({ email });
    const result = { admin: existingUser?.role === 'admin' };
    res.status(200).send(result);
  });
  
  module.exports={verifyJWT,verifyAdmin,authenticationRouter};