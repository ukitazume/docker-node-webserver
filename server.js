const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    customize = require('./customize');

customize(app);

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/status', function (req, res) {
    res.send('Hello from the Node Webserver!');
});

app.use(function (req, res, next) {
    res.status(404).end();
});

app.listen(process.env.PORT || 8080, '0.0.0.0');
