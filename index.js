const config = require('./config')
const bodyParser = require('body-parser')
console.log(config)

const knowledgeItemRouter = require('./routes/knowledgeItems')

const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect(config.connectionString);

const express = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/knowledge/', knowledgeItemRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log("test PR")