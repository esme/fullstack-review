const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI || 'mongodb://localhost/fetcher';
mongoose.connect(URI)
  .then(() => console.log('Connected to:', URI))
  .catch((err) => console.log(err));

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: String, unique: true},
  name: String,
  login: String,
  full_name: String,
  html_url: String,
  stargazers_count: Number,
  forks_count: Number,
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  let newrepo = new Repo(data)
  newrepo.save()
    // .then(res => console.log('save data to mongo', res))
    .catch(err => console.log(err))
}

let find = (cb, login = null) => {
  let obj = login ? {login: login} : null;
  console.log('login obj', obj)

  const query = Repo.find(obj).sort({stargazers_count: 'desc'}).limit(25)
  const promise = query.exec();
  promise.addBack((err, docs) => {
    if (err) {
      console.log(err)
    } else {
      // console.log('docs', docs[0])
      cb(null, docs);
    }
  })
}

module.exports.save = save;
module.exports.find = find;