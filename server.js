const express = require('express');
const app = require('./app');
const morgan = require("morgan");
require('dotenv').config();


app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});