console.log('inside message.controller sourced!');
myApp.controller('MessageController', ['$http', function($http){
  var mc = this;
  mc.messages = {};
  getMessages();

  function getMessages() {
    console.log('getMessages func ran');
    $http.get('/message').then(function(response){
      console.log(response.data);
      mc.messages = response.data;
    });
  }

  function addMessage() {
    console.log('add message', mc.messages);
    $http.post('/message', mc.messages)
    .then(function(response) {
      console.log('added message', response);
      getMessages();
    });
  }
}]);
