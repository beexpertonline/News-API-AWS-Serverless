const newsCollection = require('../models/db/newsModel');

module.exports.create = async (body) => {
    const news = new newsCollection(body);
    await news.save();
    return news;
};

module.exports.update = async (id, news) => {
    const updatednews = await newsCollection.updateOne({ _id: id }, news, { new: true });
    return updatednews;
};

module.exports.delete = async (id) => {
    return await newsCollection.deleteOne({ _id: id })
};

module.exports.get = async (id) => {
    return await newsCollection.findOne({ _id: id })
};

module.exports.getAll = async () => {
    return await newsCollection.find();
};