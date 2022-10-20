const express = require('express');
const router = express.Router();

const { getIndexPage } = require('../controllers/index.controller');

router.route('/')
    .get(getIndexPage);

module.exports = router;