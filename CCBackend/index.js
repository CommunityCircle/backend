require('dotenv').config()
const server = require('./api/server');
const neo4j = require('neo4j-driver')
const port = process.env.PORT|| 5000;

server.get('/', (req,res)=>res.send('hello'))
server.listen(port, ()=> console.log(`listening on ${port}`))

// const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
// const session = driver.session()
// const resultPromise = session.writeTransaction(tx =>
//   tx.run(
//   'CREATE (a:Greeting) SET a.message = $message RETURN a.message + ", from node " + id(a)',
//   { message: 'hello, world' }
//   )
// )
// resultPromise.then(result => {
//   session.close()
//   const singleRecord = result.records[0]
//   const greeting = singleRecord.get(0)
//   console.log(greeting)
//   // on application exit:
//   driver.close()
// })