
var express = require('express');
const port = 8888
var app = express();

var session = require('express-session')

app.use(session({
  name: 'sessionid',           // cookie name to store session id 
  resave: false, 
  secret: 'abc',               // key to sign cookie
  saveUninitialized : false
}))

app.get('/views', (req, res) => {
  req.session.views = (req.session.views || 0) + 1
  res.send(`<h1>You viewed this page for ${req.session.views} times</h1>`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

