const express = require('express');
const postController = require('../controller/post.controller');

const router = express.Router();

router.get('/', postController.getPosts);

module.exports = router;
