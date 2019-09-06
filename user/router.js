const userRouter = new require("express").Router()
const User = require("./model")

userRouter.post("/user", (req, res, next) => {
  User.create({
    email: req.body.email,
    password: require("bcrypt").hashSync(req.body.password, 10)
  })
    .then(user => res.send(user))
    .catch(next)
})

module.exports = userRouter