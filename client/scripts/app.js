var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous', // TODO: check if needs to be anonymous

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = () => {}) {
    // GET request
    Parse.readAll((data100) => {
      // examine the response from the server request:
      // shows ALL data
      console.log('line 25');
      console.log(data100, 'line 26');
      // // dataForUs = data.map(row => row.slice());
      // data is the successCB
      MessagesView.renderAllMessages(data100);
      callback(data100);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
