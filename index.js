const app = require("express")()
const port = process.env.PORT || 4000

const database = require("./database")

app.use(
  require("cors")(),
  require("body-parser").json(),
  // require("./event/router"),
)

app.listen(port, () => console.log(`Listening on :${port}`))