const express = require('express');
const path = require('path');

const app = express();
const port = parseInt(process.env.PORT, 10) || 8000;

app.use(express.static(path.join(__dirname, '/client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

const server = app.listen(port, () => {
    console.log(`'Listening on port '${server.address().port}`);
});