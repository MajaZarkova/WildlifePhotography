const mongoose = require('mongoose');
const User = require('../models/User');
const Post = require('../models/Post');

const connectionString = 'mongodb://localhost:27017/wildlifephotography';

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });

    } catch (err) {
        console.log('Database error');
        console.log(err);
    }
}

