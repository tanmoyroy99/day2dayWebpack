const express   = require('express');
const router    = express.Router();

router.get('/getUsername', (req, res) => res.send({ username: 'tanroy99' }));

module.exports = router;