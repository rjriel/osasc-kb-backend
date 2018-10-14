const express= require('express')
const passport= require('passport')
const router = express.Router()

router.post('/login', function(req, res) {
     passport.authenticate("local", function(err, user) {
      if (err) {
        res.status(401).json({ message: err })
      } else {
        req.logIn(user, function(err) {
          if (err) {
            res.status(401).json({ message: err })
          } else {
            res.json({})
          }
        })
      }
    })(req, res)
})


router.post('/logout', function(req, res) {
    req.logout()
    res.status(204).end()
})

module.exports = router
