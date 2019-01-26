const express = require('express');
const path = require('path');
var cors = require('cors')
const app = express();
const axios = require('axios');

// app.use(express.static(path.join(__dirname, 'build'))); //for deploy
// app.use(express.static(path.join(__dirname, 'src'))); //for dev

// CORS headers to pass to front end react app
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use(cors());

// Routes
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/posts', function(req, res, next) {
	// pagination options: https://developer.wordpress.org/rest-api/reference/posts/#example-request
	let url = 'https://public-api.wordpress.com/rest/v1.1/sites/mugfolk.wordpress.com/posts';
	axios.get(url)
	.then(function(wpRes) {
		let postsRaw = wpRes.data.posts;
		let posts = [{title:'Title',date:'Date',content:'I am content'}];
		for (var i = 0; i < postsRaw.length; i++) {
			posts[i] = {
				title: postsRaw[i].title,
				date: postsRaw[i].date,
				content: postsRaw[i].content
			};
		}
		res.send(posts);
	})
	.catch(function(err){
	  	console.log('Error: ', err)
	})
});

// Add Some routes for monitoring if I go that route


app.listen(4000);