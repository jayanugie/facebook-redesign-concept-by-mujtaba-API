const router = require('express').Router();

const feedsController = require('./controllers/feedsController');

router.get('/feeds', feedsController.getFeeds);
router.post('/feeds', feedsController.createFeeds);
router.delete('/feeds/delete/:id', feedsController.deleteFeeds);

module.exports = router;