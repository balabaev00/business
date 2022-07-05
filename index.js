const bodyParser = require('body-parser');
const express = require("express");
const router = require('./settings/router.js');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(`/`, router)

app.listen(PORT, console.log(`Server started on ${PORT} port`))