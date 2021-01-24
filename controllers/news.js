const { logger } = require('../helpers/index');
const { newsRepo } = require('../repository');


exports.create = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in create news api`);
        // Start create news inside 
        const news = await newsRepo.create(req.body);
        return res.Ok(news);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in register api is:`, err)
        return res.InternalServerError();
    }
}

exports.update = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in update news api`);
        var existNews = await newsRepo.get(req.params.id);

        if (!existNews) {
            return res.NotFound();
        }
        //TODO Start create user inside dynamoDB
        const news = await newsRepo.update(req.params.id, req.body);
        return res.Ok(news);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in register api is:`, err)
        return res.InternalServerError();
    }
}

exports.delete = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in delete news api`);
        //TODO Start update user password 
        const news = await newsRepo.delete(req.params.id);
        return res.Ok({
            success: true,
            message: "deleted successfully"
        });
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in changePassword api is:`, err)
        return res.InternalServerError();
    }
}

exports.get = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in get news api`);
        const news = await newsRepo.get(req.params.id);
        if (!news) {
            return res.NotFound();
        } else {
            return res.Ok(news);
        }
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in get api is:`, err)
        return res.InternalServerError();
    }
}

exports.getAll = async function (req, res) {
    try {
        logger.info(`requestID ${req.requestId} in getAll news api`);
        const newss = await newsRepo.getAll();
        return res.Ok(newss);
    } catch (err) {
        logger.error(`requestID ${req.requestId} error in get api is:`, err)
        return res.InternalServerError();
    }
}