const express = require('express');
const app = express();

app.get('/api/problemlist', (req, res) =>
    res.json([{
        'id': 1,
        'title': 'foo',
        'body': 'okokok1'
    }, {
        'id': 2,
        'title': 'bar',
        'body': 'okokok2'
    }, {
        'id': 3,
        'title': 'baz',
        'body': 'okokok3'
    }, {
        'id': 4,
        'title': 'fizz',
        'body': 'okokok4'
    }]));

app.listen(5000, () => console.log('Example app listening on port 3001!'))