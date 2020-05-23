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

  fetch: function(callback = ()=>{}) {
    // GET request
    var dataForUs = [];
    Parse.readAll((data) => {
      // examine the response from the server request:
      // shows ALL data
      console.log(data, 'line 25'); // data works
      // dataForUs = data.map(row => row.slice());
      data;
      // return data;
    });
    // return data;
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
