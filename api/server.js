const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const projectsRouter = require('../projects/projects-router')
const resourcesRouter = require('../resources/resources-router')
const tasksRouter = require('../tasks/tasks-router')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(logger)
server.use('/projects', projectsRouter)
server.use('/resources', resourcesRouter)
server.use('/tasks', tasksRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'server uppppp' })
})

function logger(req, res, next) {
    console.log(`a ${req.method} request was made to ${req.url}`)
    next()
}

module.exports = server