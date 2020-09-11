
exports.seed = function(knex) {
  const resources = [
    {//1
      name: 'computer',
      description: 'computer description'
    },
    {//2
      name: 'conference room',
      description: 'conference room description'
    },
    {//3
      name: 'microphone',
      description: 'microphone description'
    },
  ]

  return knex('resources').insert(resources)
};
