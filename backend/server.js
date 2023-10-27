const express = require("express")
require("dotenv").config()
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")

const main = async () => {
  await mongoose.connect(process.env.MONGO_URL)
}

main()
  .then(() => console.log("connected to mongo"))
  .catch((e) => console.error(e))

const app = express()
const PORT = process.env.PORT

//middlewares
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use("/uploads", express.static(__dirname + "/uploads"))

const userRoute = require("./routes/userRoutes")
app.use("/", userRoute)
const postRoute = require("./routes/postRoutes")
app.use("/post", postRoute)

app.listen(PORT, () => {
  console.log("listening to port 3000")
})
