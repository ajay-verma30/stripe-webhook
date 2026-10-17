const express = require('express');
const app = express();
const morgan = require("morgan");
require('dotenv').config();

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use(express.json());


app.get('/', async (req, res) => {
    res.status(200).json({ message: "Working" });
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});