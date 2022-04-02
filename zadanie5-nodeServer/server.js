import http from 'http';

console.log('Server.js hello world')

const server = http.createServer((request, response) => {
  console.log('hello', request.url)

  if (request.url === '/cars') {
    if (request.method === 'GET') {
      response.writeHead(200, { contentType: "application/json" })
      // const response = "response from server!" + Date.now()
      response.write(JSON.stringify({ cars: [] }))
      return response.end()
    }
  }

  response.writeHead(404, { contentType: "application/json" })
  response.write(JSON.stringify({ "messsage": 'Not found' }))
  response.end()
})

server.listen(3005)
console.log('Node server is listenning on 3005')