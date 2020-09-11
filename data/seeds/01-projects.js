
exports.seed = function(knex) {
  const projects = [
    {
      name: 'Project 1',
      description: 'project description',
      completed: true
    },
    {
      name: 'Project 2',
      description: 'project description 2',
      completed: true
    },
    {
      name: 'Project 3',
      description: 'project description 3',
      completed: false
    },
  ]

  return knex('projects').insert(projects)
};
