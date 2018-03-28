// Headline model
// ==============

// require nekodb
var ko = require('nekodb');

var Headline = ko.Model('Headline', {
	headline: ko.String,
	summary: ko.String,
	url: ko.URL,
	date: ko.Date.now(),
	saved: ko.Boolean.default(false),
	$$indexes: {
		headline: {
			unique: true
		}
	}
});

// Export the Headline model
module.exports = Headline;
