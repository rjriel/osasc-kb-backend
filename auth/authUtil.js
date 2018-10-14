module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.status(403).end()
    }
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.role === "admin") {
      if (next) next()
      return true
    } else {
      if (next) res.status(403).end()
      return false
    }
  }
}
