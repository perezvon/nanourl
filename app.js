'use strict';

var express = require('express')

const app = express()

const port = process.env.PORT || 3000;  

app.route('/')
	.get((req, res) => {
      res.sendFile(process.cwd() + '/index.html');
    });

app.get('/new/:url', (req, res) => {
	var originalUrl = req.params.url;
	var shortUrl = req.headers.host + '/' + urlShorten(originalUrl);
	res.json({
		"original_url": originalUrl,
		"short_url": shortUrl
	})
})

app.listen(port, function() {
    console.log('URL shortener app listening on port ' + port);
});


function urlShorten(url) {
	return '1234';
}