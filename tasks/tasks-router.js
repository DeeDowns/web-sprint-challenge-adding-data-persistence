const express = require('express')

const Tasks = require('./tasks-model')

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


router.post('/projects/:project_id', (req, res) => {
    const { project_id } = req.params
    const { description, completed, notes } = req.body
    Tasks.addTask({project_id, description, completed, notes})
    .then(taskId => {
        console.log(taskId)
        res.status(201).json({ message: 'new task created' })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
    
}) 


module.exports =router