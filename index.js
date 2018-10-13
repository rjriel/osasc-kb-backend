const config = require('./config')
console.log(config)

const knowledgeItemRouter = require('./routes/knowledgeItems')

const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect(config.connectionString);

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/knowledge/', knowledgeItemRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))