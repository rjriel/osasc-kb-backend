require('dotenv').load();

const bodyParser = require('body-parser')

const knowledgeItemRouter = require('./routes/knowledgeItems')
const userRouter = require('./routes/users')
const picklistRouter = require('./routes/picklist')
const authRouter = require('./routes/auth')
const picklistItemRouter = require('./routes/picklistItems')

const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect(process.env.CONNECTION_STRING);

const passport = require('passport');

const express = require('express')
const expressSession = require('express-session')
const MongoStore = require("connect-mongo")(expressSession)
const app = express()
const port = process.env.PORT || 3000

require("./auth/passport.js")(passport)

app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

// Note: sessions can be stored in Mongo
app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: process.env.PASSPORT_SECRET,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    name: "ocasc-api-session",
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/knowledge/', knowledgeItemRouter)
app.use('/user/', userRouter)
app.use('/picklist/', picklistRouter)
app.use('/auth/', authRouter)
app.use('/picklistitem/', picklistItemRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
