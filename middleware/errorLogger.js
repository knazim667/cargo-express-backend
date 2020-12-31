const fs = require("fs");
const { promisify } = require("util");

const appendFile = promisify(fs.appendFile);

const errorLogger = async (err, req, res, next) => {
  if (err) {
    appendFile(
      "errorLogger.txt",
      `${new Date().toDateString()} - ${req.method} - ${err.message}\n`,
      (error) => {
        if (error) {
          console.log("File append Error");
        }
      }
    );

    if (err.status) {
      res.status(err.status);
    } else {
      res.status(500);
    }

    res.json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = errorLogger;
