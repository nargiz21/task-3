const express = require('express');
const app = express();
const fs = require('fs')

const file = fs.readFileSync('./employees.json', 'utf8')

app.get('/', (req,res) => {
    res.send(file)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  



