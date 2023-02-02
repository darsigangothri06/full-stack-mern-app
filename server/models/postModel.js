const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    location: String,
    likes: {
        type: Number,
        default: 6
    },
    description: String,
    PostImage: String,
    date: Date
})

postSchema.pre('save', function(next){
    this.date = Date.now() - 1000
    next()
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post