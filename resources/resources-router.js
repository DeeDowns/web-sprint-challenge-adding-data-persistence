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

module.exports = router
