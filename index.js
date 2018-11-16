const fs = require('fs')
var express = require('express')
var app = express()
var firebase = require('./src/database/firebase/index')
var ref = firebase.ref()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.get('/shop/getShop', (req, res) => {
    res.sendFile(`${__dirname}/foo/timo.jpg`)
})

app.get('/shop/setting/manual', (req, res) => {
    console.log('TODO: Manual Setting')
})

app.get('/shop/setting/auto', (req, res) => {
    console.log('TODO: Auto Setting')
})

app.get('/user/getLocation', (req, res) => {
    ref.child('users').child('alanisawesome').once("value", function(snapshot) {
      res.send(snapshot.val().location)
    });
})

app.get('/car/getLocation', (req, res) => {
    ref.child('parking').once("value", function(snapshot) {
      res.send(snapshot.val())
    });
})

app.listen(process.env.PORT || 8000)
