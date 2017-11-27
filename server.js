var express = require('express');
var path  = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3005;
app.set('views', path.join(__dirname, 'client-side'));

app.set('COORTB','mongodb://localhost:27017/test');
// app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'client-side')));
/* static folder mapping */
app.get("/",function(req, res) {
	res.sendFile(__dirname +'/client-side/index.html');	
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(require('./server-side/rtb_newsr_api'));
app.use(require('./server-side/rtb_dashboard/rtb_dashboard_api'));
app.use(require('./server-side/rtb_usersrdetails/rtb_usersrdetails_api'));
app.use(require('./server-side/rtb_gridviewall/rtb_gridviewall_api'));
app.use(require('./server-side/rtb_srapproved/rtb_srapproved_api'));
app.use(require('./server-side/rtb_approvedsrPDF/rtb_approvedsrPDF_api'));

app.listen(port, function() {
    console.log('Server started on the port'+ port);
});

module.exports = app;