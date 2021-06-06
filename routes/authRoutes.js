const passport = require("passport");
const authMiddleware = require("../middleware/authMiddleware");
const keys = require('../config/keys');

module.exports = (app) => {
  app.get("/api/login", passport.authenticate("spotify"));

  app.get(
    "/callback",
    passport.authenticate("spotify", { failureRedirect: "/" }),
    function (req, res) {
      res.redirect(keys.BASE_URL+'/dashboard');
    }
  );

  app.get("/api/token", authMiddleware, (req, res) => {
    res.send({token: req.user});
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
