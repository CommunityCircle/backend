require('dotenv').config()
const server = require('./api/server');
const port = process.env.PORT || 5000;

server.get('/', (req,res)=>res.send('hello'))
server.listen(port, ()=> console.log(`listening on ${port}`))

