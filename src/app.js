const express = require('express')
const cookieRoutes = require('./routes/cookies');
const app =express()
app.use(express.json());
app.use('/api', cookieRoutes);
app.use('/api/user', require('./routes/user_routes.js'));

module.exports = app;

