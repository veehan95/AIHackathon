var express = require('express')
var app = express()
var cors = require('cors')

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/api/endpoint1', cors(), (req, res) => {
    res.send(JSON.stringify({hi: "Hello World newest cors done"}));
})

app.listen(process.env.PORT || 80)
var express = require('express')
var cors = require('cors')
var app = express()
