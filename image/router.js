const imageRouter = new require("express").Router()
const Image = require("./model")

imageRouter.get("/image", (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
    .catch(next)
})

imageRouter.post("/image", require("../auth"), (req, res, next) => {
  Image.create(req.body)
    .then(image => res.send(image))
    .catch(next)
})

module.exports = imageRouter