const express = require('express');
const router = express.Router();

const { getComparisonMatchRate } = require('../controllers/string-compare.controller');

router.route('/string-compare')
    .post(getComparisonMatchRate);

module.exports = router;