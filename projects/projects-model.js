const db = require('../data/db-config')

module.exports = {
    getProjects,
    addProjects
}

function getProjects() {
    return db('projects')
}

function addProjects(project) {
    return db('projects')
    .insert(project, 'id')
}