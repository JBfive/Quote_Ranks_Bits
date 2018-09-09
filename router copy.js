var Handlers = require('./controllers');
const bodyParser = require('body-parser');

module.exports = {
	'router': Routify
}


function Routify(app){
	app.use(bodyParser.json());

	app.post('/api/authors', function(req, res){ //req.body in with authors???
		Handlers.create(req, res);
	});

	app.get('/api/authors', function(req, res){
		Handlers.findAll(req, res);
	});

	app.get('/api/authors/:id', function(req, res){
		Handlers.findOne(req, res);
	});
	app.post("/api/authors/:id", function(req, res){
		Handlers.addQuote(req, res)
	})

	app.put('/api/authors/:id', function(req, res){ //req.body in with it
		Handlers.updateOne(req, res);
	});
	// app.put('/api/authors/:id', function(req, res){
	// 	console.log(req.body)
	// 	Handlers.updateQuote(req, res);
	// });

	app.delete('/api/authors/:id', function(req, res){
		Handlers.deleteOne(req, res);
	});


	return app;
}