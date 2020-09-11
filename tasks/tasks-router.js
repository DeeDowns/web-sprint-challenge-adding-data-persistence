const express = require('express')

const Tasks = require('./tasks-model')
const Projects = require('../projects/projects-model')

const router = express.Router()

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(tasks => {
        console.log(tasks)
        res.status(200).json({ data: tasks })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})


router.post('/projects/:project_id', validateProjectId,validateTask, (req, res) => {
    const { project_id } = req.params
    const { description, completed, notes } = req.body
    Tasks.addTask({project_id, description, completed, notes})
    .then(taskId => {
        if(!project_id) {
            res.status(404).json({message: 'project not found'})
        }
        console.log(taskId)
        res.status(201).json({ message: 'new task created' })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
    
}) 

function validateTask(req, res, next) {
    const {description} = req.body
    
    if(!req.body) {
        res.status(400).json({ message: 'missing task data'})
    } else if(!description) {
        res.status(400).json({ message: 'missing required description field'})
    } else {
        next()
    }
}

function validateProjectId(req, res, next) {
    const { project_id } = req.params

    Projects.getProjectsById(project_id)
    .then(project => {
        if(project) {
            next()
        } else {
            res.status(404).json({message: 'project not found'})
        }
    })
    .catch(error => {
        res.status(500).json({ message: error.message })
    })
    
    
}

module.exports =router