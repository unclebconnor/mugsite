const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();
const axios = require('axios');


// app.use(express.static(path.join(__dirname, 'build'))); //for deploy
// app.use(express.static(path.join(__dirname, 'src'))); //for dev

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(cors());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/posts', function(req, res, next) {
	var url = 'https://public-api.wordpress.com/rest/v1.1/sites/mugfolk.wordpress.com/posts';
	axios.get(url)
	.then(function(wpRes) {
		var posts = wpRes.data.posts;
		res.send(posts);
	})
	.catch(function(err){
	  	console.log('Error: ', err)
	})
});


app.listen(4000);