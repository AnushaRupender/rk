var fs = require('fs')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const logger = require("./utils/logger");
const cors = require('cors');
const cookieParser = require('cookie-parser');

var port = 8181
app.use(bodyParser.json())


app.get('/getAllNotifications',function(req, res){
	logger.info("get getAllNotifications");
	fs.readFile('./mock-data/notifications.json',function(err, data){
		if (err) return false
		res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	    res.status(200)
	    res.type('json')
	    res.send(data)
	    res.end()

	})
})
app.use(cors());
app.listen(port,function(){
	console.log("listening on port"+port);
})
