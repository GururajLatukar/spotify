require("dotenv").config();
const express = require("express");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");
const app = express();

app.use(express.json());
app.use(
  cookieSession({
    name: "spotify-app",
    keys: [process.env.COOKIE_KEY],
    maxAge: 30 * 24 * 60 * 60 * 1000
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/spotifyRoutes")(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
