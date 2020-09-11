const express = require('express')

const Resources = require('./resources-model')

const router = express.Router()

router.get('/', (req,res) => {
    Resources.getResources()
    .then(resources => {
        console.log(resources)
        res.status(200).json({ data: resources })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})

router.post('/', validateResource, (req, res) => {
    const { name, description } = req.body
    Resources.addResource({ name, description })
    .then(newResource => {
        console.log(newResource)
        res.status(201).json({ message: 'new resource created' })
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: error.message })
    })
})


function validateResource(req, res, next) {
    const {name } = req.body
    
    if(!req.body) {
        res.status(400).json({ message: 'missing resource  data'})
    } else if(!name) {
        res.status(400).json({ message: 'missing required name field'})
    } else {
        next()
    }
}

module.exports = router
