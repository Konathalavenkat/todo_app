const mongoose = require('mongoose');

const ConnectMongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = ConnectMongoose;