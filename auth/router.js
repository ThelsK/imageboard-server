const jwtRouter = new require("express").Router()
const { toJWT, toData } = require("./jwt")

jwtRouter.post("/login", (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Please supply a valid email and password"
    })
    return
  }
  // Insert proper user validation here, and
  // Unhardcode the user id provided below.
  res.send({
    jwt: toJWT({ userId: 1 })
  })
})

module.exports = jwtRouter