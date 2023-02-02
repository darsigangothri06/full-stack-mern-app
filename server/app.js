const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const postRouter = require('./routes/postRoutes')
const path = require('path')

const app = express()

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json());

// use cors
app.use(cors())

// get forms data
app.use(express.urlencoded({extended: true, limit: '10kb'}))

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/v1/posts', postRouter)

module.exports = app