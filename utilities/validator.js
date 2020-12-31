exports.validateEmail = (email) => {
  let pattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
  if (pattern.test(email)) {
    return true;
  }
  return false;
};
exports.validatePhone = (phone) => {
  if (phone.trim().length === 10) {
    return true;
  }
  return false;
};
exports.validateAllField = (user) => {
  if (
    user.userName !== "" ||
    user.emailId !== "" ||
    user.password !== "" ||
    user.phoneNumber !== ""
  ) {
    return true;
  }
  return false;
};
