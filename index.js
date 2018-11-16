var express = require('express')
var app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json({ verify: (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf
  }
} }))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/endpoint1', (req, res) => {
    res.send(JSON.stringify({hi: "Hello World newest cors done"}));
})

app.listen(process.env.PORT || 80)
var express = require('express')
var cors = require('cors')
var app = express()
