const Post = require('../models/postModel')
const multer = require('multer')

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img/')
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split('/')[1]
        cb(null, `user-${req.body.name}-${Date.now()}.${ext}`) 
    }
})

const multerFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
      cb(null, true)
    } else{
      cb(new Error('Not an image, Please upload Only images'), false)
    }
}
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})
  
exports.uploadPostImage = upload.single('PostImage')

exports.createPost = async (req, res) => {
    try{
        console.log(req.body)
        const filteredBody = {...req.body};
        if(req.file){
            console.log(req.file)
            filteredBody.PostImage = req.file.filename
        }
        const result = await Post.create(filteredBody)

        res.status(200).json({
            status: 'success',
            message: 'Post Created Successfully',
            data: result
        })
    }catch(err){
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.getAllPosts = async (req,res) => {
    try{
        const posts = await Post.find()

        res.status(200).json({
            status: 'success',
            data: {
                noOfPosts: posts.length,
                posts
            }
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}

exports.deleteAll = async(req, res) => {
    try{
        await Post.deleteMany({})
        res.status(204).json({
            status: 'success',
            data: 'null'
        })
    }catch(err){
        res.status(400).json({
            status: 'failed',
            message: err
        })
    }
}