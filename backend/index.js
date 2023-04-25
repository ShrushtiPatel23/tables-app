const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 
const dataRoutes = require("../backend/routes/data")
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/', dataRoutes);

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})