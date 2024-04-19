const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'sakib', gmail: 'sakib@gmail.com'},
    {id: 2, name: 'rakib', gmail: 'rakib@gmail.com'},
    {id: 3, name: 'akas', gmail: 'akas@gmail.com'},
]

app.get('/', (req, res) => {
  res.send('Hello World!')
  
})
app.get('/users', (req, res) => {
  res.send(users)
})
app.post('/users', (req, res) => {
  console.log('post hhitting');
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})