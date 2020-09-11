const db = require('../data/db-config')

module.exports = {
    getTasks,
    addTask
}

function getTasks() {
    return db('tasks')
    .join('projects', 'projects.id', 'tasks.project_id')
    .select('projects.name', 'projects.description', 'tasks.description', 'tasks.notes', 'tasks.completed')
}

function addTask(task) {
    return db('tasks')
    .insert(task)

}

