// eslint-disable-next-line no-undef
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world?????????????');
});

// eslint-disable-next-line no-undef
module.exports = router;