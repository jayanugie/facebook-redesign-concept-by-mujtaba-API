const { Feeds } = require("../models");


// get all post
const getFeeds = (req, res) => {
    Feeds.findAll({
        order: [
            ['id', 'DESC']
        ]
    })
    .then(posts => {
        return res.status(200).json(posts)
    })
    .catch(() => {
        return res.status(500).json({
            message: 'Failed to load data'
        })
    })
}


// create post
const createFeeds = async (req, res) => {
    const body = req.body.body;

    const post = await Feeds.create({
        body: body
    });

    return res.status(200).json({
        message: 'Post uploaded successfully',
        data: {
            id: post.id,
            body: post.body,
        }
    })
}


// delete post
const deleteFeeds = (req, res) => {
    Feeds.destroy({
        where: { id: req.params.id }
    })
    .then(() => {
        return res.status(200).json({
            message: "Post deleted successfully"
        })
    })
}


// update data
const updateFeeds = (req, res) => {
    Feeds.update({
        body: req.body.body
    }, {
        where: { id: req.params.id}
    })
    .then(() => {
        return res.status(200).json({
            message: "Update successful",

        })
    })
}



module.exports = {
    getFeeds,
    createFeeds,
    deleteFeeds,
    updateFeeds
}