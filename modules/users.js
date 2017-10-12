var knex = require('../knex_config');
module.exports = {
	addUser : (name,email,password) =>{

		knex('users').insert({
			name 	 	:name,
			email 	 	: email,
			password 	:password
		}).then((msg)=>{
			console.log(msg)
		}).catch((err) => {
			console.log(err)
		})
	}
};