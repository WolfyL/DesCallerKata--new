var request = require('request');

var options = {
  url: 'https://api.github.com/repos/WolfyL/DesCallerKata--new/pulls',
  headers: {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Mozilla/5.0',
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    body = JSON.parse(body)
    body.forEach(pr => {
      console.log('PR: ', pr.title);
      pr.requested_reviewers.forEach(reviewer => {
        console.log('Needs to be reviewed by: ', reviewer.login)
      })
    })
  }
}

request(options, callback);
