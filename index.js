require('dotenv').load();

const bodyParser = require('body-parser')

const knowledgeItemRouter = require('./routes/knowledgeItems')
const userRouter = require('./routes/users')

const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect(process.env.CONNECTION_STRING);

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    return done(null, true);
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json({ limit: "10mb" }))
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }))

// Note: sessions can be stored in Mongo
app.use(require('express-session')({ secret: config.sessionSecret }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/auth/example/', passport.authenticate('local'),
function(req, res) {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.send('Hello Authenticated User!')
});

app.use('/knowledge/', knowledgeItemRouter)
app.use('/user/', userRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
