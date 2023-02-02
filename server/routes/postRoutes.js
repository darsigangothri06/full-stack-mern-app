const express = require('express')
const postController = require('../controllers/postController')

const router = express.Router()

router.get('/', postController.getAllPosts)
router.post('/',
    postController.uploadPostImage,
    postController.createPost
)
router.get('/delete', postController.deleteAll)

module.exports = router