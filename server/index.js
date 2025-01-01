const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user.route.js');
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const app = express();

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

app.use("/api/user",userRoute);

app.get('/test', (req, res) => {
    res.send('Hello from Test Node API server!');
})

app.get('/', (req, res) => {
  res.send('Hello from Node API server!');
});

