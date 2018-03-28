// Controller for our scraper
// ============================
var models = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req, res) {
    // scrape the NYT
	  scrape()
	  .then(articles => {
		  // neko works with models one at a time, so we'll use a map
		  // to create all the articles and save them
		  return Promise.all(articles.map(article => {
			  return models.Headline.create(article).save()
			  // if there are duplicates, save will return an error
			  .catch(() => {
				  // we'll just return null instead
				  return null;
			  })
		  }))
	  })
	  .then(articles => {
		  // to figure out how many new articles were created, we filter out all the null ones
		  return articles.filter(article => article !== null).length;
	  })
	  .then(numArticles => {
		  if (numArticles === 0) {
			  return 'No new articles today. Check back tomorrow!' ;
		  } else {
			  return 'Added ' + numArticles + ' new articles!';
		  }
	  }).catch(err => {
		  console.error(err);
		  return 'Encountered an error when scraping articles.';
	  }).then(message => {
		  res.json({
			  message: message
		  });
	  })
  }
};
