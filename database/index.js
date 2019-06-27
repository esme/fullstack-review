const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: String,
  name: String,
  full_name: String,
  url: String,
  stargazers_count: Number,
  forks_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  const repo = new Repo(data)
  repo.save()
    .then(res => console.log('mongo data', res))
    .catch(err => console.log(err))
}

module.exports.save = save;