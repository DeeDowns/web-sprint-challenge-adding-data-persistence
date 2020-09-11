const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

// const db = require()

const server = express()

server.use(helmet())
server.use(express.json())
server.use(logger)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'server uppppp' })
})

function logger(req, res, next) {
    console.log(`a ${req.method} request was made to ${req.url}`)
    next()
}

module.exports = server