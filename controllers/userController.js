var passwordHash 	= require('password-hash')
var knex 		 	= require('./../config/knex_config');
var userModule 		= require('./../modules/users');
module.exports 		= {
	register  : (req,res)=>{

		const error 	= [];
		let name 		= req.body.name;
		let email 		= req.body.email;
		let password 	= req.body.password;

		//check all input for length 
		if(name.length < 2)
		{
			error.push("Name is invalid");
		}
		if(email.length < 10)
		{
			error.push("Please enter a valid email address");
		}
		if(password.length < 6)
		{
			error.push("Please enter a valid password");
		}

		let hashed_password = passwordHash.generate(password);

		let addUser = userModule.addUser(name,email,hashed_password);
		console.log(addUser);

		console.log('\n \n \n -------------------------------- \n \n \n ')

		if(addUser.status == "success")
		{
			return res.json({
				status: "success",
				message: "User has been added"
			})
		}
		else
		{
			return res.json({
				status: "error",
				message: "An error occurred"
			})
		}

		// knex('users').insert({
		// 	name : name,
		// 	email : email,
		// 	password : hashed_password
		// }).then((resp)=>{
		// 	return res.json({
		// 		status: "success",
		// 		message: "User has been added"
		// 	})
		// }).catch((error)=>{
		// 	console.log(error);
		// 	return res.json({
		// 		status : "error",
		// 		message : "An error occurred please try again",
		// 		code : error
		// 	});
		// })
	}
}