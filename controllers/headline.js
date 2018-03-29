// Controller for our headlines
// ============================
var Headline = require("../models").Headline;

var ObjectID = require('nekodb').client.ObjectID

module.exports = {
	// Find all headlines, sort them by date
	findAll: function(req, res) {
		Headline.find(req.query)
		.sort({ date: -1 })
		.then(headlines => {
			res.json(headlines);
		})
		.catch(err => {
			console.error(err);
			res.status(500).send();
		});
	},
	// Delete the specified headline
	delete: function (req, res) {
		Headline.deleteById(req.params.id)
		.then(deletedCount => {
			res.json(deletedCount);
		})
		.catch(err => {
			console.error(err);
			res.status(500).send();
		});
	},
	// Update the specified headline
	update: function (req, res) {
		Headline.findById(req.params.id)
		.then(headline => {
			// update the headline
			// `saved` is coming back to us as a string, so we'll need to convert it to a boolean
			// if using an ajax framework like axios, which sends JSON by default, you wouldn't
			// need to do this
			headline.saved = req.body.saved
			// save the update to the database
			return headline.save();
		})
		.then(headline => {
			res.json(headline);
		})
		.catch(err => {
			console.error(err);
			res.status(500).send();
		});
	}
};
