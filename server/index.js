const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route.js');
const authRoutes = require('./routes/auth.route.js');
dotenv.config();
mongoose.connect(process.env.MONGO)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Something broke!';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message
    })
});




















/*
app.get('/test', (req, res) => {
    res.send('Hello from Test Node API server!');
})

app.get('/', (req, res) => {
  res.send('Hello from Node API server!');
});

*/