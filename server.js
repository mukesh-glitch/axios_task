const express = require('express');
const controller = require('./controller/Controller')

const app = express();
const PORT = 5000


app.get('/user',controller.getUser)
app.get('/axiosUser',controller.axiosUser)

// ROUTES
// app.use('/',route)


 app.listen(PORT, () => { console.log(`server running on ${PORT}`)})