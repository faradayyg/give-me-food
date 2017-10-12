var express 	= require('express');
var path 		= require('path');
var knex 		= require('./knex_config');
var userClass 	= require('./modules/users');
var bodyParser 	= require('body-parser');
var app 		= new express();
var apiRoutes 	= require('./routes/api_routes')(app);

express.static('bundle');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const view = (res,file) =>{
	return res.sendFile(path.resolve(__dirname,'views/'+file))
}

app.use(express.static('bundle'));
app.use(express.static(__dirname + './views/'));

app.get('/',function(req, res){
	view(res,'index.html');
});

app.post('/', function(req,res)
{
	res.json(req.param('hi'))
});

app.listen(3000,  function(){
	console.log('Mr Seun is listening on port 3000!');
});