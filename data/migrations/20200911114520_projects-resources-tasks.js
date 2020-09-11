
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', table => {
        table.increments()
        table.string('name', 255)
        .notNullable()
        .index()
        table.string('description', 255)
        .index()
        table.boolean('completed')
        .notNullable()
        .defaultTo(false)
    })
    .createTable('resources', table => {
        table.increments()
        table.string('name', 255)
        .notNullable()
        .index()
        .unique()
        table.string('description', 255)
        .index()
    })
    .createTable('tasks', table => {
        table.increments()
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        table.string('description', 255)
        .notNullable()
        .index()
        table.string('notes', 255)
        .index()
        table.boolean('completed')
        .notNullable()
        .defaultTo(false)
    })
    .createTable('project_resources', table => {
        table.increments()
        table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        table.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.id')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
    })

};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
