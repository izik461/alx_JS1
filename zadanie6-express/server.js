import express from 'express'
import fs from 'fs'

console.log('Hello from server.js')

const app = express()

app.get('/', (req, res) => {

  fs.readFile('./data/hello.txt',
    'utf8',
    (error, data) => {
      if (error) {
        console.error(error)
        return
      }
      console.log(data)

      fs.writeFile('./data/hello2.txt',
        data,
        'utf8',
        (error2, data2) => {
          if (error2) {
            console.log(error2)
            return
          }
          console.log('Created hello2.txt')
        })
    })

  res.send('Hello world')
})

app.listen(5001, () => {
  console.log('Express server srunning on port 5001')
})