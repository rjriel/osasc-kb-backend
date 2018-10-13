const config = require('./config')
console.log(config)

const knowledgeItemRouter = require('./routes/knowledgeItems')

const mongoose = require('mongoose');
mongoose.set("debug", true)
mongoose.connect(config.connectionString);

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
const port = 3000

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))