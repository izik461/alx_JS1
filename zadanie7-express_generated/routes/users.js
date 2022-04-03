var express = require('express');
var router = express.Router();

const predefinedUsers = [
  {
    id: 1,
    'name': 'Jerzyk'
  },
  {
    id: 2,
    'name': 'Damian'
  }
]

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send(predefinedUsers)
});

module.exports = router;
