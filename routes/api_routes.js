module.exports = (function(){
	"use strict";
	var express = require('express');
	var router = express.Router();
	var userController 	= require('./../controllers/userController');

	router.post('/user',	userController.register);

	return router;
});