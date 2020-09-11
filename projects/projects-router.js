const express = require('express')

const Projects = require('./projects-model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(projects => {
        console.log(projects)
        res.status(200).json({ data: projects})
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

router.post('/', (req, res) => {
    const projectData = req.body
    Projects.addProjects(projectData)
    .then(newProject => {
        console.log(newProject)
        res.status(201).json({ message: 'new project created' })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

module.exports = router