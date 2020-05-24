// var message = [{
//   username: 'Mel Brooks',
//   text: 'It\'s good to be the king',
//   roomname: 'lobby',
// }]

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$form.on('chats', MessagesView.render);
    console.log('line 8');
    // var test = App.fetch(App.stopSpinner);
    Messages.initialize();
  },

  renderMessage: function(message) {
    // TODO: needs submit button
    // for (var i = 0; i < message.length; i++) {
    $('#chats').append(MessageView.render(message));
    // $.getJSON('app.js', function(results) {
    //   console.log(results, 'line 11');
    // });
  },

  renderAllMessages: function(data) {
    // console.log(Array.isArray(data.results), 'line 31')
    var realData = data.results;
    // loop through all messages from the data
    for (var i = 0; i < realData.length; i++) {
      // check for text property
      if (realData[i].text !== undefined) {
        var message = realData[i];
        MessagesView.renderMessage(message);
      }
      // call renderMessage on each message
      // console.log('renderAllMessages');
    }
  }

};

// MessagesView.renderMessage(message);

// GOAL: add messages to the DOM
//

// properties to take from data
// var message = {
//   username: 'Mel Brooks',
//   text: 'It\'s good to be the king',
//   roomname: 'lobby'
// };