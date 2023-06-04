const express = require('express');
const passport = require('passport');
const { createCategory } = require('../controllers/category.controller');
const router = express.Router();

router.post('/category', passport.authenticate('jwt', {
    session: false,
}), createCategory);

module.exports = router;