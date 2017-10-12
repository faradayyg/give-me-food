
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('orders', function(table){
  		table.increments('id').unsigned().primary();
  		table.integer('user_id').unsigned();
  		table.integer('food_options_id');
  		table.boolean('paid').defaultTo(false);
  	})
  	]);
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('orders');
};
