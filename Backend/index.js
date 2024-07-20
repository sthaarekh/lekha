const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
connectToMongo();
const app = express()
const port = 9010

app.use(cors())
app.use(express.json())
app.use('/api/auth',require('./routes/auth'));
app.use('/api/data',require('./routes/data'));
app.use('/api/trans',require('./routes/lendborrow'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
