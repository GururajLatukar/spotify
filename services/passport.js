const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;

passport.serializeUser(function (accessToken, done) {
  done(null, accessToken);
});

passport.deserializeUser(function (accessToken, done) {
  done(null, accessToken);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: process.env.SPOTIFY_CLIENTID,
      clientSecret: process.env.SPOTIFY_CLIENTSECRET,
      callbackURL: process.env.SPOTIFY_CALLBACKURL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, accessToken);
    }
  )
);
