
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('users', function(table){
  		table.increments('id').unsigned().primary();
  		table.string('email');
  		table.string('name');
  		table.string('password');
  	})
  	]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
