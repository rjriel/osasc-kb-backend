var User = require("../models/user")

module.exports = function(passport) {
  passport.serializeUser(function(user, done) {
    done(null, user._id)
  })

  passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id })
      .then(user => {
          done(null, user)
      })
  })

  //Configure login strategies
  require("./login.js")(passport, User)
}
