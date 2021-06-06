const passport = require("passport");
const SpotifyStrategy = require("passport-spotify").Strategy;
const keys = require('../config/keys');

passport.serializeUser(function (accessToken, done) {
  done(null, accessToken);
});

passport.deserializeUser(function (accessToken, done) {
  done(null, accessToken);
});

passport.use(
  new SpotifyStrategy(
    {
      clientID: keys.SPOTIFY_CLIENTID,
      clientSecret: keys.SPOTIFY_CLIENTSECRET,
      callbackURL: keys.SPOTIFY_CALLBACKURL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, accessToken);
    }
  )
);
