const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const cors = require('cors');

const fs = require('fs');


var LiveChatApi = require('livechatapi').LiveChatApi;
var api = new LiveChatApi('xzigoo@gmail.com', '58613798363e80f511ae3e3ce1aef5ab')


app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

const port = process.env.PORT || 3090;
// const server = http.createServer(app);
// server.listen(port);
console.log('Server listening on:',port);

api.status.get({ group: 0 }, function(data){
  console.log(data);
});

http.createServer( function(req, res) {

	// fs.readFile('./views/index.html', function (err, html) {
	//     if (err) {
	//         throw err; 
	//     }       
	//     http.createServer(function(request, response) {  
	//         response.writeHeader(200, {"Content-Type": "text/html"});  
	//         response.write(html);  
	//         response.end();  
	//     }).listen(80);
	// });
	fs.readFile('./views/index.html', function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			// if (mimeType != undefined) {
				res.setHeader("Content-Type", "text/html");
			// }
			res.statusCode = 200;
			res.end(contents);
		} else {
				console.log('no errors')
			res.writeHead(500);
			res.end();
		}
	});

 }).listen(port);