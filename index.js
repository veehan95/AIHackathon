var express = require('express')
var app = express()
const bodyParser = require('body-parser')

server.use(bodyParser.json({ verify: rawBodySaver }))
server.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/endpoint1', cors(), (req, res) => {
    res.send(JSON.stringify({hi: "Hello World newest cors done"}));
})

app.listen(process.env.PORT || 80)
var express = require('express')
var cors = require('cors')
var app = express()
