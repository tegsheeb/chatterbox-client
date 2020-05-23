var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // missing click functionality
    // submitting message (creating message & post to server)
    // POST request (ajax)
    var userInput = $('#message').val();
    var userMessage = {
      text: userInput,
      username: App.username,
      roomname: 'testRoom'
    };
      // POST request
    console.log(userMessage, 'line 18');
    Parse.create(userMessage);
    console.log(userMessage, 'line 18');
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
    // TODO: check to see where setStatus interacts w/ other files
  }

};