const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

// Import Routes
const postsRoute = require('./routes/posts');

// Middleware
// parse body of post
app.use(bodyParser.json());

// post route
app.use('/posts', postsRoute);


// Routes
app.get('/', (req,res) => {
  res.send('START');
});

// CONNECT DB
mongoose.connect(process.env.DB_CONNECTION,
 { useNewUrlParser: true },
 () => console.log("CONNECTED TO DB")
)
// Port of server
app.listen(3000);