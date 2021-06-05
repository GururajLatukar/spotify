const auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(process.env.BASE_URL + "/");
};

module.exports = auth;