var mongoose = require('mongoose');


const QuoteSchema = new mongoose.Schema({
	quote: {type: String, required: [true, "Please provide a quote"], minlength: [3, "More words please"]},
	votes: {type: Number, default: 0}

}, {timestamps: true});

const AuthorSchema = new mongoose.Schema({
	name: {type: String, required: [true, "Name is required"], minlength: [3, "Must be at least 3 letters"] }, //do async val for unique
	quotes: [QuoteSchema],
	completed: {type: Boolean, default: false} //this line is used for when updating
}, {timestamps: true});

// AuthorSchema.path('name').validate({ //async custom validation, can mess with updates
// 	isAsync: true,
// 	validator: function(thisName, respond){
// 		mongoose.model("authors").count({name: thisName}, function(errs, count){
// 			// console.log(!count);
// 			// respond(!count)
// 			
// 		})
// 	},
// 	message:"Author already exists" //returns just as above with the Schema error messages 
// })

AuthorSchema.path('name').validate({ //async custom validation, can mess with updates
	isAsync: true,
	validator: function(thisName, respond){
		mongoose.model("authors").findOne({name: thisName}, function(errs, author){
			respond(!author)
			
			// for adds
			// for updates/addQuotes
		})
	},
	message:"Author already exists" //returns just as above with the Schema error messages 
})


mongoose.connect('mongodb://localhost/fav_authors');
Authors = mongoose.model('authors', AuthorSchema);
Quotes = mongoose.model('quotes', QuoteSchema);

module.exports = {Authors, Quotes}