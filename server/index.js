const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(router);

app.listen(PORT, ()=>console.log("server is running at "+PORT));