const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 4000
const morgan = require('morgan');

// ✅ connect to the mongodb database
connectDB()

// ✅ GLOBAL MIDDLEWARES
app.use(cors({
  origin: 'https://client-iota-gray.vercel.app',  // or your frontend URL
  credentials: true,                // allow cookies if used
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(morgan('dev'))

// ✅ ROUTES
app.use('/api/items', require("./routes/items"))
app.use('/api/user', require("./routes/authRoutes"))
app.use('/api/payment', require("./routes/payment"))

// ✅ START SERVER
app.listen(PORT, () => {
  console.log("Server is running on port", PORT)
})
