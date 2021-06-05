const passport = require("passport");

module.exports = (app) => {
  app.get("/api/login", passport.authenticate("spotify"));

  app.get(
    "/callback",
    passport.authenticate("spotify", { failureRedirect: "/" }),
    function (req, res) {
      res.send({ msg: "Login is successful!" });
    }
  );

  app.get("/api/token", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
