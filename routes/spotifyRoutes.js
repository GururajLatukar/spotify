const passport = require("passport");
const authMiddleware = require("../middleware/authMiddleware");
const axios = require("axios");

module.exports = (app) => {
  app.get("/api/artists/:query", authMiddleware, async (req, res) => {
    try {
      let info = await axios.get(
        `https://api.spotify.com/v1/search?q=${req.params.query}&type=artist&limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + req.user,
          },
        }
      );
      res.send({ artists: info.data });
    } catch (error) {
      res.redirect(process.env.BASE_URL);
    }
  });

  app.get("/api/artists/albums/:id", authMiddleware, async (req, res) => {
    try {
      let info = await axios.get(
        `https://api.spotify.com/v1/artists/${req.params.id}/albums?limit=10`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + req.user,
          },
        }
      );
      res.send({ albums: info.data });
    } catch (error) {
      res.redirect(process.env.BASE_URL);
    }
  });

  app.get(
    "/api/artists/albums/tracks/:id",
    authMiddleware,
    async (req, res) => {
      try {
        let info = await axios.get(
          `https://api.spotify.com/v1/albums/${req.params.id}/tracks`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + req.user,
            },
          }
        );
        res.send({ songs: info.data });
      } catch (error) {
        res.redirect(process.env.BASE_URL);
      }
    }
  );
};
