const express = require('express');
const app = express();

app.get('/health', async (req, res) => {
    res.status(200).json({ message: "ok" });
})


module.exports = app
