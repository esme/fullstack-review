const express = require('express');
let app = express();
let db = require('../database');
let git = require('../helpers/github.js');

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log(req.body)
  if (req.body.name) {
    git.getReposByUsername(req.body.name, (err, data) => {
      if (err) {
        console.log(err)
        res.status(500).send();
      } else {
        // console.log(data)
        // db.save(data);
        data.forEach((el) => db.save(el))
        res.status(201).send();
      }
    })
  } else {
    res.status(500).send();
  }
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.find((err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    } else {
      // console.log('finished', data)
      res.status(200).send(data)
    }
  })
});

app.get('/repos/:id', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('url', req.url, req.params)
  db.find((err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send()
    } else {
      // console.log('finished', data)
      res.status(200).send(data)
    }
  }, req.params.id)
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

