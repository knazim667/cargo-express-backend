const users = require("../model/Users");
const validate = require("../utilities/validator");

exports.registerUser = async (req, res) => {
  try {
    if (
      validate.validatePhone(req.body.phoneNumber) &&
      validate.validateAllField(req.body) &&
      validate.validateEmail(req.body.emailId)
    ) {
      const user = await users.create({
        userName: req.body.userName,
        emailId: req.body.emailId,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
      });

      res.status(200).json({
        status: "success",
        data: {
          user,
        },
      });
    } else if (!validate.validatePhone(req.body.phoneNumber)) {
      res.status(400).json({
        status: "error",
        message: "Enter valid Phone Number",
      });
    } else if (!validate.validateEmail(req.body.emailId)) {
      res.status(400).json({
        status: "error",
        message: "Enter valid Email id",
      });
    } else if (!validate.validateAllField(req.body)) {
      res.status(404).json({
        status: "fail",
        message: "All fields are required and unique",
      });
    }
  } catch (error) {
    console.log(error);
  }
};
