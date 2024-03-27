const express = require('express');
const functions = require('./methods/functions.js');
const getNumbersMiddleware = require('./middlewares/getnumber');
const app = express();
const PORT = 9876;


app.get('/numbers/:numberid', getNumbersMiddleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
