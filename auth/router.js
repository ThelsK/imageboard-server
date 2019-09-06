const jwtRouter = new require("express").Router()
const { toJWT, toData } = require("./jwt")
const User = require("../user/model")

jwtRouter.post("/login", (req, res, next) => {

  if (!req.body.email || !req.body.password) {
    res.status(400).send({
      message: "Please supply a valid email and password."
    })
    return
  }

  User.findOne({ where: { email: req.body.email } })
    .then(entity => {

      if (!entity) {
        res.status(400).send({
          message: "No user found with that email."
        })
        return
      }

      if (!require("bcrypt")
        .compareSync(req.body.password, entity.password)) {
        res.status(400).send({
          message: "Incorrect password for that email."
        })
        return
      }

      res.send({
        jwt: toJWT({ userId: entity.id })
      })
    })

    .catch(error => {
      console.error(error)
      res.status(500).send({
        message: "An unexpected error occurred.",
        error
      })
    })
})

jwtRouter.get("/secret", require("."), (req, res, next) => {
  res.send({
    message: "Thanks for visiting the secret endpoint."
  })
})

module.exports = jwtRouter