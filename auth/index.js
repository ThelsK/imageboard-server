const auth = (req, res, next) => {
  const auth = req.headers.authorization &&
    req.headers.authorization.split(" ")

  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      require("../user/model")
        .findByPk(require("./jwt").toData(auth[1]).userId)
        .then(user => {
          if (!user) {
            return next("No user found with that email.")
          }

          req.user = user
          next()
        })
        .catch(next)
    }
    catch (error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      })
    }
  }
  else {
    res.status(401).send({
      message: "Please supply some valid credentials."
    })
  }
}

module.exports = auth