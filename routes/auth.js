const express= require('express')
const passport= require('passport')
const router = express.Router()

router.post('/login', function(req, res) {
     passport.authenticate("local", function(err, user) {
      if (err) {
        res.json({ success: false, message: err })
      } else {
        req.logIn(user, function(err) {
          if (err) {
            res.json({ success: false, message: err })
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
