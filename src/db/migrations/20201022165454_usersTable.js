
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
      table.increments('user_id');
      table.text('user_name').notNull();
      table.text('email');
      table.timestamp('created_time').notNull();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
