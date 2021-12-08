const express = require("express")
const app = express()

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

const port = 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})