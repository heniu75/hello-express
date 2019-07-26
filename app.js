const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

// this middleware declaration is order sensitive
app.use('/secret', function(req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
  });

app.get('/secret', (req, res) => {
    res.send('You are in /secret');
})

app.get('/secret/key', (req, res) => {
    res.send('You are in /secret/key');
})

app.listen(3000, () => {
    console.log('Example app listening on port 3000');
})
