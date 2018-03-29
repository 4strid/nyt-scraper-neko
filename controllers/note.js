// Controller for our notes
// ========================
var Note = require("../models").Note;

module.exports = {
	// Find one note
	findAll: function (req, res) {
		Note.find({_headline: req.params.id})
		.then(notes => {
			res.json(notes);
		})
		.catch(err => {
			console.error(err);
			res.status(500).send()
		});
	},
	// Create a new note
	create: function (req, res) {
		Note.create(req.body).save()
		.then(note => {
			res.json(note);
		})
		.catch(err => {
			console.error(err);
			res.status(500).send()
		})
	},
	// Delete a note with a given id
	delete: function (req, res) {
		Note.deleteById(req.params.id)
		.then(deletedCount => {
			res.json(deletedCount);
		})
		.catch(err => {
			console.error(err);
			res.status(500).send()
		})
	}
};
