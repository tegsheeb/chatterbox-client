var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.$form.on('chats', MessagesView.render);
  },

  renderMessage: function(message) {


    $('#chats').append(MessageView.render(message));

    $.getJSON('app.js', function(results) {
      console.log(results, 'line 11');
    });
  }

};

// GOAL: add messages to the DOM
//