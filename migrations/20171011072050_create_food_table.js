
exports.up = function(knex, Promise) {
  return Promise.all([
  	knex.schema.createTable('food_options',(table)=>{
  		table.increments('id').unsigned().primary();
  		table.string('food_name');
  		table.decimal('price', 5);
  	})
  	])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_options');
};
