const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const DB = require('./DB');

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(helmet());
app.use(bodyParser.json());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// Routes
app.get('/api/v1/products', (req, res) => {
    res.status(200).json(DB.products);
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Starting the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
