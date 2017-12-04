let express = require('express'),
    app = express(),
    morgan = require('morgan'),
    port = process.env.PORT || 80,
    host = process.env.HOST || '0.0.0.0';

app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/status', function (req, res) {
    res.send('Hello from the Node Webserver!');
});

app.use(function (req, res, next) {
    res.status(404).end();
});

app.listen(port, host);
