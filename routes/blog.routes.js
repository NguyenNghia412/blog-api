const express = require('express');
const passport = require('passport');
const { createBlog, getPagingBlog, updateBlog, getBlog } = require('../controllers/blog.controller');
const { queryPagingValidateSchema } = require('../middleware/validation/base/queryPaging.validate');
const { validate } = require('../middleware/validation/error.validate');
const router = express.Router();

router.post('/blog', passport.authenticate('jwt', {
    session: false,
}), createBlog);
router.get('/blog', queryPagingValidateSchema, validate, passport.authenticate('jwt', {
    session: false,
}), getPagingBlog);
router.put('/blog', passport.authenticate('jwt', {
    session: false,
}), updateBlog);
router.get('/blog/:blogId', passport.authenticate('jwt', {
    session: false,
}), getBlog);

module.exports = router;