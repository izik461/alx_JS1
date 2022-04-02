import http from 'http';
import fs from 'fs';

console.log('Server.js hello world')

const fsp = fs.promises;

const server = http.createServer((request, response) => {
  console.log('hello', request.url)

  if (request.url === '/cars') {
    if (request.method === 'GET') {

      return fsp.readFile('./data/cars.json', 'utf8')
        .then(jsonFile => {
          console.log(jsonFile);
          response.writeHead(200, { contentType: "application/json" })
          response.write(jsonFile)
          return response.end()
        })
        .catch(error => {
          console.log('Error reading file: ', error)

          response.writeHead(500, { contentType: "application/json" })
          response.write(JSON.stringify({ messsage: error }))
          return response.end()
        })
    }
  }

  response.writeHead(404, { contentType: "application/json" })
  response.write(JSON.stringify({ "messsage": 'Not found' }))
  response.end()
})

server.listen(3005)
console.log('Node server is listenning on 3005')