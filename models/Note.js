// Note model
// ==========

// Require nekodb
var ko = require("nekodb");

var Note = ko.Model('Note', {
	_headline: ko.models.Headline,
	date: ko.Date.now(),
	noteText: ko.String
})

// Export the Note model
module.exports = Note;
