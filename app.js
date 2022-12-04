const express = require('express');
const app = express();
const path = require('path');
const routes = require('./router/user');

app.use(routes, (req, res, next) => {
    console.log('routes have been loaded');
});

app.listen(8000);