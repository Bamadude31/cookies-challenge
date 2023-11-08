const express = require('express')
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/login', (req,res) => {
  const { name } = req.query;
  if (name){
    res.cookie('name', name);
    res.send('Cookie set with name: ' + name);
  } else {
    res.send('Please provide a name in the query parameter');
  }
});

app.get('/hello', (req,res) => {
  const {name} = req.cookies;
  if (name){
    res.send(`Welcome ${name}!`);
  } else {
    res.send('Please log in first.');
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});