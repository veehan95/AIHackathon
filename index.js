var express = require('express')
var app = express()
var firebase = require('./src/database/firebase/index')

//var ref = firebase.ref('shop/shop/loc')
//ref.once("value", function(snapshot) {
//  console.log(snapshot.val());
//});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/shop/getShop', (req, res) => {
    res.send('TODO: Shop List from fire base')
})

app.get('/', (req, res) => {
    console.log(res.params)
})

app.get('/shop/setting/manual', (req, res) => {
    console.log('TODO: Manual Setting')
})

app.get('/shop/setting/auto', (req, res) => {
    console.log('TODO: Auto Setting')
})

app.get('/user/getLocation', (req, res) => {
    console.log('TODO: User Location')
})

app.get('/car/getLocation', (req, res) => {
    console.log('TODO: Car Location')
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
