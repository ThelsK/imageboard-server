const jwtRouter = new require("express").Router()
const { toJWT, toData } = require("./jwt")

jwtRouter.post("/login", (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Please supply a valid email and password."
    })
    return
  }
  // Insert proper user validation here, and
  // Unhardcode the user id provided below.
  res.send({
    jwt: toJWT({ userId: 1 })
  })
})

jwtRouter.get("/secret", (req, res, next) => {
  const auth = req.headers.authorization &&
    req.headers.authorization.split(' ')
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1])
      res.send({
        message: 'Thanks for visiting the secret endpoint.',
        data
      })
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
})

module.exports = jwtRouter