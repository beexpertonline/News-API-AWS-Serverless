const mongoose = require('mongoose'); // Node Tool for MongoDB
const uuid = require('uuid');
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; //

const newsSchema = new Schema({
    _id: {
        type: String,
        index: true,
    },
    title: {
        type: String,
    },
    des: {
        type: String,
    },
    url: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now },
});

newsSchema.pre('save', function (next) {
    if (this._id == null) {
        this._id = uuid();
    }
    next();
});

module.exports = mongoose.model('news', newsSchema);
