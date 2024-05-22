const {Comment} = require('../models');

module.exports.createComment = async function(req, res){
    let articleId = req.params.articleId;
    await Comment.create({
        author_name: req.body.author_name,
        body: req.body.body,
        comment_on: new Date,
        article_id: articleId
    });
    res.redirect(`/article/${articleId}`);
}