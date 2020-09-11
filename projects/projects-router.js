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

router.post('/',validateProject, (req, res) => {
    const {name, description, completed} = req.body

    Projects.addProjects({name, description, completed})
    .then(newProject => {
        console.log(newProject)
        res.status(201).json({ message: 'new project created' })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})


function validateProject(req, res, next) {
    const {name} = req.body
    
    if(!req.body) {
        res.status(400).json({ message: 'missing project data'})
    } else if(!name) {
        res.status(400).json({ message: 'missing required name field'})
    } else {
        next()
    }
}
module.exports = router