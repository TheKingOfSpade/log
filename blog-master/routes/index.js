var express = require('express');
var router = express.Router();
const articleController = require('../controllers/articleController');
const commentController = require('../controllers/commentController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/article');
});
router.get('/article/add', articleController.renderAddForm);
router.post('/article/add', articleController.renderAddForm);

router.get('/article/:articleId', articleController.displayArticle);
module.exports = router;
router.post('/article/add', articleController.addArticle);

router.post('/article/:articleId/edit', articleController.updateArticle);


router.post('/article/:articleId/comment/create', commentController.createComment);