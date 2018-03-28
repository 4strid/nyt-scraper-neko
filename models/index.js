var ko = require('nekodb');

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mongoHeadlines";

ko.connect({
	client: 'mongodb',
	url: MONGODB_URI
})

module.exports = {
  Headline: require("./Headline"),
  Note: require("./Note")
};
