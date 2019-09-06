const Sequelize = require("sequelize")
const database = require("../database")

const User = database.define("user",
  {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "users",
  }
)

module.exports = User