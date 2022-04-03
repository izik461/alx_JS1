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

// app.post('/users', function (req, res) {
//   const userId = req.body.id;
//   const userName = req.body.name;

//   const createdUser = {
//     "id": userId,
//     "name": userName
//   }

//   const parsedUsers = users.users
//   parsedUsers.push(createdUser)
//   console.log('Users with added user: ', parsedUsers)

//   const users = fsp.writeFile('./data/users.json', 'utf8')
//     .then((writeResult) => {
//       console.log('File saved successfully')
//       res.send(createdUser)
//     })
//     .catch((error) => {
//       console.log('Could not read users from file: ', error)
//       res.send(error)
//     })
// })

module.exports = router;
