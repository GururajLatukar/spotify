const passport = require("passport");
const auth = require("../middleware/auth");

module.exports = (app) => {
  app.get("/api/login", passport.authenticate("spotify"));

  app.get(
    "/callback",
    passport.authenticate("spotify", { failureRedirect: process.env.BASE_URL }),
    function (req, res) {
      res.redirect(process.env.BASE_URL+'/dashboard');
    }
  );

  app.get("/api/token", auth, (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect(process.env.BASE_URL);
  });
};
