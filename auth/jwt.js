const jwt = require("jsonwebtoken")
const secret = process.env.JWT_SECRET ||
  ">{Hn]uevoXvT?1jJDH7[yOpKWhmRry-j<wZuM!]<(EIRpah*c]ZO]u&z>7B1V*3"

const toJWT = data =>
  jwt.sign(data, secret, { expiresIn: "2h" })

const toData = token =>
  jwt.verify(token, secret)

module.exports = { toJWT, toData }