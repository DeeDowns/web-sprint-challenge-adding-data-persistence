
exports.seed = function(knex) {
  const tasks = [
    {//1
      project_id: 1,
      description: 'task 1 description',
      notes: 'notes',
      completed: false,
    },
    {//2
      project_id: 2,
      description: 'task 2 description',
      notes: 'notes',
      completed: false,
    },
    {//3
      project_id: 2,
      description: 'task 1 description',
      notes: 'notes',
      completed: false,
    },
    {//4
      project_id: 2,
      description: 'task 2 description',
      notes: 'notes',
      completed: false,
    },
    {//5
      project_id: 3,
      description: 'task 1 description',
      notes: 'notes',
      completed: false,
    },
    {//6
      project_id: 3,
      description: 'task 2 description',
      notes: 'notes',
      completed: false,
    }
  ]

  return knex('tasks').insert(tasks)
};
