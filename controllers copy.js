const {Authors, Quotes} = require('./mongoose');


module.exports = {
	create: create, //can just declare as a single word
	findAll: findAll,
	findOne: findOne,
	deleteOne: deleteOne,
	updateOne: updateOne,
	addQuote: addQuote
	// updateQuote: updateQuote
}

function create(req, res){
	Authors.create(req.body)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
function findAll(req, res){
	Authors.find({})
		.sort({name: 1})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));

}
function findOne(req, res){
	Authors.findById(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
function updateOne(req, res){
	Authors.findByIdAndUpdate(req.params.id, {$set: {pets: req.body}, {runValidators: true})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}
function addQuote(req, res){ //erg
	// Authors.findByIdAndUpdate(req.params.id)
	// .then(author=>{
	// 	author.quotes.push(req.body);
	// 	return author.save();

	// })
	// .then(data=>res.json(data))
	// .catch(errs=>res.json(errs));
	let newQ = new Quotes(req.body);
	newQ.save()
		.then(q=>{
			console.log(q)
			return Authors.findByIdAndUpdate(req.params.id, {$push: {quotes: req.body}})
		})
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

// function updateQuote(req, res){
// 	Authors.findById(req.params.id)
// 		.then(quote=>{
// 			console.log(quote)
// 			 //assumes that 
// 			quote.push(req.body);
// 			return quote.save();
// 		})
// 		.then(data=>res.json(data))
// 		.catch(errs=>res.json(errs));
// }

function deleteOne(req, res){
	Authors.findByIdAndRemove(req.params.id)
		.then(data=>res.json(data))
		.catch(errs=>res.json(errs));
}

