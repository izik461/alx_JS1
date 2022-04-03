var express = require('express');
var fs = require('fs');
const { parse } = require('path');
var router = express.Router();
const users = require('../data/users.json')

const fsp = fs.promises

/* GET users listing. */
router.get('/', function (req, res, next) {
  const users = fsp.readFile('./data/users.json', 'utf8')
    .then((fileData) => {
      console.log('Read users from file: ', fileData)
      res.send(fileData)
    })
    .catch((error) => {
      console.log('Could not read users from file: ', error)
      res.send(error)
    })
});

router.get('/:userId', (req, res) => {
  console.log(req.params)
  const userId = req.params.userId//req.params["userId"]
  console.log('Searching for id: ', userId)
  console.log('Current users: ', users)

  const parsedUsers = users.users
  console.log('Parsed users: ', parsedUsers)

  const foundUser = parsedUsers.find((aUser) => {
    return aUser.id === parseInt(userId)
  })
  if (foundUser) {
    res.send(foundUser)
  } else {
    res.status(404).send('COULD NOT FIND USER')
  }
})

router.post('/', function (req, res) {
  const userName = req.body.name;

  const parsedUsers = users.users
  console.log('Current users: ', parsedUsers)
  console.log('Current users: ', parsedUsers)

  const newUserId = parsedUsers[parsedUsers.length - 1].id + 1
  const createdUser = {
    "id": newUserId,
    "name": userName
  }

  parsedUsers.push(createdUser)
  console.log('Users with added user: ', parsedUsers)
  fsp.writeFile('./data/users.json', JSON.stringify({ "users": parsedUsers }), 'utf8')
    .then((writeResult) => {
      console.log('File saved successfully')
      res.send(createdUser)
    })
    .catch((error) => {
      console.log('Could not write users to file: ', error)
      res.send(error)
    })
})

module.exports = router;
