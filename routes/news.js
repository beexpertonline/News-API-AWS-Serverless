const express = require('express');
const { newsController } = require('../controllers/index');
const router = express.Router();

router.post('/news/', newsController.create);
router.patch('/news/:id', newsController.update);
router.delete('/news/:id', newsController.delete);
router.get('/news/:id', newsController.get);
router.get('/news/', newsController.getAll);

module.exports = router;