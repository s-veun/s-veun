const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Server Error";

  //    wrong mongoose id error
  if (err.name === "CaseError") {
    const message = `Resource not Fount with this id.. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //    Duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate Key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //    JWT error
  if (err.name === "TokenExpiredError") {
    const message = "Your URL Invaild Please try again. ";
    err = new ErrorHandler(message, 401);
  }

//    jwt expired
  if (err.name === "JsonWebTokenError") {
    const message = "Token expired. Please login again.";
    err = new ErrorHandler(message, 401);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  })

};
