const express = require('express');
const app = express();
const ErrorHandler = require("./utils/ErrorHandler")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"))
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));


if(process.env.NODE_ENV !== "PRODUCTION"){
    require('dotenv').config({
        path: 'config/.env'
    });
}

// routes
const user = require("./controller/user")
app.use("/api/v1/user", user)

// Error handling

module.exports = app