const db = require('../data/db-config')

module.exports = {
    getProjects,
    addProjects,
    getProjectsById
}

function getProjects() {
    return db('projects')
}

function addProjects(project) {
    return db('projects')
    .insert(project, 'id')
}

function getProjectsById(id) {
    return db('projects')
    .where({id})
    .first()
}