const Sequelize = require("sequelize")
const database = require("../database")

const Image = database.define("image", {
  title: Sequelize.STRING,
  url: Sequelize.STRING,
})

module.exports = Image