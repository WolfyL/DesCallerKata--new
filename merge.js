
var request = require('request');

var headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Mozilla/5.0',
    'Authorization': "token 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",
};
 
var dataString = '{"commit_title":"commit_title"}';

var options = {
    url: 'https://api.github.com/repo/WolfyL/DesCallerKata--new/pulls/3/merge',
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({
      'commit_title': 'salut les potes',
      'sha': 'f2b46d20c4db2e55cb8c20223f39c07f97c3ffdb',
    }),
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
      console.log(body);
  }
}

request(options, callback);