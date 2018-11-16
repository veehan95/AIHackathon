var express = require('express')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.all('/:img', (req, res) => {
  console.log(req.params.img)
  res.send(200)
})


app.listen(process.env.PORT || 8000)

/*

const request = require('request')
const fs = require('fs')
var FormData = require('form-data')

var form = new FormData()
form.append("access_key",'aff7b7616a03b7084f29')
form.append("secret_key",'40f17d27e2f0a0013c750322bc567f9c4e9da990')
form.append("fileinfo",fs.createReadStream('foo/timo.jpg'))

form.submit('https://fashion.recoqnitics.com/analyze', function(err, res) {
  console.log(res.resume())
})

*/
