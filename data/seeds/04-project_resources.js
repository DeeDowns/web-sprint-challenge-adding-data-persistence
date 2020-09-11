
exports.seed = function(knex) {
  const projectResources = [
    {//1
      project_id: 1,
      resource_id: 1,
    },
    {//2
      project_id: 1,
      resource_id: 2,
    }, 
    {//3
      project_id: 2,
      resource_id: 3,
    }, 
    {//4
      project_id: 2,
      resource_id: 1,
    }, 
    {//5
      project_id: 3,
      resource_id: 3,
    }, 
    {//6
      project_id: 1,
      resource_id: 3,
    }, 
  ]

  return knex('project_resources').insert(projectResources)
};
