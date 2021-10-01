// var request = require('request');

// function callback(error, response, body) {
//   console.log("RES FRERO", response);
//   if (!error && response.statusCode == 200) {
//     console.log("BODYBUILDER", body);
//   }
// }

// const mergePr = (pullNumber) => {
//   const options = {
//     url: 'https://api.github.com/repos/WolfyL/DesCallerKata--new/pulls/3/merge',
//     method: 'PUT',
//     body: '{"commit_title":"commit_title"}',
//     headers: {
//       'Accept': 'application/vnd.github.v3+json',
//       'User-Agent': 'Mozilla/5.0',
//     }
//   }
//   request(options, callback);
// }

// mergePr(1);



var request = require('request');

var headers = {
    'Accept': 'application/vnd.github.v3+json',
    'User-Agent': 'Mozilla/5.0',
};

var dataString = '{"commit_title":"commit_title"}';

var options = {
    url: 'https://api.github.com/WolfyL/DesCallerKata--new/pulls/3/merge',
    method: 'put',
    headers: headers,
    body: dataString,
};

function callback(error, response, body) {
  console.log("RES", response)
  if (!error && response.statusCode == 200) {
      console.log(body);
  }
}

request(options, callback);