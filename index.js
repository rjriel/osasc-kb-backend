require('dotenv').load();

const bodyParser = require('body-parser')

const knowledgeItemRouter = require('./routes/knowledgeItems')
const userRouter = require('./routes/users')
const picklistRouter = require('./routes/picklist')
const picklistItemRouter = require('./routes/picklistItems')

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
app.use('/user/', userRouter)
app.use('/picklist/', picklistRouter)
app.use('/picklistItem/', picklistItemRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
