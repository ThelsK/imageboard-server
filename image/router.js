const imageRouter = new require("express").Router()
const Image = require("./model")

imageRouter.get("/image", (req, res, next) => {
  Image.findAll()
    .then(images => res.send(images))
    .catch(next)
})

// eventRouter.get("/event/:id", (req, res, next) => {
//   Event.findByPk(req.params.id)
//     .then(event => {
//       if (event) {
//         res.send(event)
//       } else {
//         res.status(404).end()
//       }
//     })
//     .catch(next)
// })

imageRouter.post("/image", (req, res, next) => {
  Image.create(req.body)
    .then(image => res.send(image))
    .catch(next)
})

// eventRouter.put("/event/:id", (req, res, next) => {
//   Event.findByPk(req.params.id)
//     .then(event => {
//       if (event) {
//         event.update(req.body)
//           .then(event => res.send(event))
//       } else {
//         res.status(404).end()
//       }
//     })
//     .catch(next)
// })

// eventRouter.delete("/event/:id", (req, res, next) => {
//   Event.destroy({ where: { id: req.params.id } })
//     .then(amount => res.send(amount))
//     .catch(next)
// })

module.exports = imageRouter