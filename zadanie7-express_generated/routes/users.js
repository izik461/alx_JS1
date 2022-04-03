var express = require('express');
var fs = require('fs')
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
  const userId = req.params["userId"]
  console.log('Searching for id: ', userId)
  console.log('Current users: ', users)

  const parsedUsers = JSON.parse(JSON.stringify(users.users))
  console.log('Parsed users: ', parsedUsers)

  const filteredUsers = parsedUsers.filter((aUser) => {
    return aUser.id == userId
  })
  res.send(filteredUsers)
})

// app.post('/users', function (req, res) {
//   const userId = req.body.id;
//   const userName = req.body.name;

//   const createdUser = {
//     "id": userId,
//     "name": userName
//   }
//   //TODO: add to existing users
//   const users = fsp.writeFile('./data/users.json', 'utf8')
//     .then((writeResult) => {
//       console.log('File saved successfully')
//       res.send(createdUser)
//     })
//     .catch((error) => {
//       console.log('Could not read users from file: ', error)
//       res.send(error)
//     })

// });
// router.post('/', function (req, res, next) {
//   const
//   const users = fsp.readFile('./data/users.json', 'utf8')
//     .then((fileData) => {
//       console.log('Read users from file: ', fileData)
//       res.send(fileData)
//     })
//     .catch((error) => {
//       console.log('Could not read users from file: ', error)
//       res.send(error)
//     })
// });

module.exports = router;
