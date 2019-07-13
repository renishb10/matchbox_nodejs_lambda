const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Matchbox Node Lambda');
});

module.exports = router;
