const users = require("../model/Users");
const validate = require("../utilities/validator");

exports.registerUser = async (req, res, next) => {
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
      let err = new Error();
      err.status = 400;
      err.message = "Enter a Valid Phone Number";
      next(err);
    } else if (!validate.validateEmail(req.body.emailId)) {
      let err = new Error();
      err.status = 400;
      err.message = "Enter valid email Id";
      next(err);
    } else if (!validate.validateAllField(req.body)) {
      let err = new Error();
      err.status = 400;
      err.message = "All field are required and Unique";
      next(err);
    }
  } catch (error) {
    let err = new Error();
    err.status = 404;
    err.message = "Some thing went wrong";
    next(err);
  }
};
