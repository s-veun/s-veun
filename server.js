const app = require("./app")
const connectDatabase = require("./db/Database")


process.on ("uncaughtException", (err) => {
    console.error(`Uncaught exception: ${err.message}`)
    process.exit(1)
})

// config
if(process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "config/.env"
    })
}

// connect db
connectDatabase()

// create server

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})

//  unhandled promise rejections

process.on("unhandledRejection", (err) => {
    console.error(`Unhandled rejection: ${err.message}`)
    console.log('unhandled promise rejections')
    server.close(() => {
        process.exit(1)
    })
})


