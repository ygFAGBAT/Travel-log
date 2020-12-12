const express = require('express');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

