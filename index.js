require('dotenv').load();

const bodyParser = require('body-parser')

const knowledgeItemRouter = require('./routes/knowledgeItems')

const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect(process.env.CONNECTION_STRING);

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/knowledge/', knowledgeItemRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
