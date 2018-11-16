var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
    res.send(JSON.stringify({hi: "Hello World newest cors done"}));
})

app.listen(process.env.PORT || 80)
var express = require('express')
var cors = require('cors')
var app = express()
