const router = require("express").Router();
const userRoutes = require("./user.js");
const profileRoutes = require('./profile');
const homeRoutes = require('./home');
const missionRoutes = require('./missions');

// Routes
router.use("/home", homeRoutes);
router.use("/user", userRoutes);
router.use('/profile', profileRoutes);
router.use('/missions', missionRoutes);

module.exports = router;
