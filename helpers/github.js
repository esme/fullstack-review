const request = require('request');
const config = process.env.CONFIG_URI || require('../config.js');

let getReposByUsername = (username, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  let callback = (error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      // console.log('github data',info);
      let result = [];
      for (el of info) {
        result.push({
          id: el.id,
          name: el.name,
          login: el.owner.login,
          html_url: el.html_url,
          full_name: el.full_name,
          stargazers_count: el.stargazers_count,
          forks_count: el.forks_count
        });
      }
      cb(null, result)
    } else {
      cb(error)
    }
  }

  request.get(options, callback)
}

module.exports.getReposByUsername = getReposByUsername;