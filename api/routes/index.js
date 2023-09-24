const express = require('express');
const router = express.Router();
const registerController = require('../controller/register');
// const countryRouter = require("./country");
// const instituteRouter = require("./institute");

router.post('/register', registerController.post);
router.post('/verify/:token', registerController.verifyEmail);
router.post('/login', registerController.login);
// router.use("/countries/", countryRouter);
// router.use("/institutes/", instituteRouter);

module.exports = router;
