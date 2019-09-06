const app = require("express")()
const port = process.env.PORT || 4000

app.use(
  require("cors")(),
  require("body-parser").json(),
)

app.listen(port, () => console.log(`Listening on :${port}`))