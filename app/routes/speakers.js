var express = require('express');
var router = express.Router();

router.get('/speakers', function(req, res){
	var info = '';
	var dataFile = req.app.get('appData');
	dataFile.speakers.forEach(function(item){
		info += `
		<li>
			<h2>${item.name}</h2>
			<img src="/images/speakers/${item.shortname}_tn.jpg" alt="speaker">
			<p>${item.summary}</p>
		</li>
		`;
	})
	res.send(`
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<h1>Academy Meetups</h1>
		${info}
		<script src="/reload/reload.js"></script>
	`);
});


router.get('/speakers/:speaker_id', function(req, res){
	var dataFile = req.app.get('appData');
	var speaker = dataFile.speakers[req.params.speaker_id]
	res.send(`
		<link rel="stylesheet" type="text/css" href="/css/style.css">
		<h1>${speaker.title}</h1>
		<h2>${speaker.name}</h2>
		<img src="/images/speakers/${speaker.shortname}_tn.jpg" alt="speaker">
		<p>${speaker.summary}</p>
		<script src="/reload/reload.js"></script>

	`);
});

module.exports = router;