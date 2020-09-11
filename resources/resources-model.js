const db = require('../data/db-config')

module.exports = {
    getResources
}

function getResources() {
    return db('resources')
}