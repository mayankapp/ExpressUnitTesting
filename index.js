const express = require('express');

const app = express();

app.use(require('./routes/user'));

app.listen(3000, () => {
    console.log("Server is Running at http://localhost:3000");
});

module.exports = app;