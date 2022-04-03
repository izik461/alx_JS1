import express from 'express'

console.log('Hello server.js')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world');
})

app.listen(5002, () => {
  console.log('Express server running on port 5002');
})