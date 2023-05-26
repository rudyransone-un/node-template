import http from 'node:http'

const server = http.createServer((_, res) => {
  res.end('Hello, World!');
})

server.listen(3000)



