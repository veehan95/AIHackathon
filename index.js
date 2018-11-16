var express = require('express')
var app = express()


app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/api/endpoint1', (req, res) => {
    res.send(JSON.stringify({hi: "Hello World newest"}));
})

app.listen(process.env.PORT || 80)
