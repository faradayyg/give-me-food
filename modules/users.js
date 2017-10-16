var knex = require('../config/knex_config');
module.exports = {
	addUser : function(name,email,password)
	{

		knex('users').insert({
			name 	 	: name,
			email 	 	: email,
			password 	: password
		}).then(function(msg){
			console.log(msg)
			return 
			{
				status : "success"
			}
		}).catch(function(err){
			return 
			{
				status : "error"
			}
		})

	}
};