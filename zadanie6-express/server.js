import express from 'express'
import fs from 'fs'

const fsp = fs.promises

console.log('Hello from server.js')

const app = express()

app.get('/', (req, res) => {

  fsp.readFile('./data/hello.txt', 'utf8')
    .then((readResult) => {
      console.log('Read from file: ', readResult)
      const newFileName = './data/hello' + Date.now() + '.txt'
      fsp.writeFile(newFileName, readResult + ' ' + Date.now(), 'utf8')
    })
    .then((writeResult) => {
      console.log('Writing file finished: ', writeResult)
    })
    .catch((error) => {
      console.log('Reading file failed: ', error)
    })
  // fs.readFile('./data/hello.txt',
  //   'utf8',
  //   (error, data) => {
  //     if (error) {
  //       console.error(error)
  //       return
  //     }
  //     console.log(data)

  // fs.writeFile('./data/hello2.txt',
  //   data,
  //   'utf8',
  //   (error2, data2) => {
  //     if (error2) {
  //       console.log(error2)
  //       return
  //     }
  //     console.log('Created hello2.txt')
  //   })
  // })

  res.send('Hello world')
})

app.listen(5001, () => {
  console.log('Express server srunning on port 5001')
})