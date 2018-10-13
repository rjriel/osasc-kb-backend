var LocalStrategy = require("passport-local").Strategy
var bcrypt = require("bcrypt")

module.exports = function(passport, User) {
  passport.use(
    "local",
    new LocalStrategy(
      {
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
      },
      function(req, username, password, done) {
        // check in mongo if a user with username exists or not
        var regExp = new RegExp("^" + username + "$", "i")
        User.findOne({ username: { $regex: regExp } }, function(err, user) {
          // In case of any error, return using the done method
          if (err) {
            console.error("login.js - User.findOne")
            console.error(err)
            return done(err.message)
          }
          isValidPassword(user, password).then(matches => {
            if (!matches) {
              return done("Invalid Password", false)
            }
            return done(null, user)
          })
        })
      }
    )
  )

  var isValidPassword = function(user, userSuppliedPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(userSuppliedPassword, user.password, function(
        err,
        doesMatch
      ) {
        resolve(doesMatch)
      })
    })
  }
}
