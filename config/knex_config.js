var path = require('path');
var knex = require('knex')(require(path.resolve(__dirname,'./../knex_config.json')));
 module.exports = knex;