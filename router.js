

module.exports = function(app) {
  app.get('/', function(req,res) {
    res.send({ message: 'secret code aa1x' });
  });

  // app.post('/signin', requireSignin, Authentication.signin);
  // app.post('/signup', Authentication.signup);
};


// var LiveChatApi = require('livechatapi').LiveChatApi;
// var api = new LiveChatApi('username@domain.com', 'APIKEY')
// api.status.get({ group: 0 }, function(data){
//   console.log(data);
// });