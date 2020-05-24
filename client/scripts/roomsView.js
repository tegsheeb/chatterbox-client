var RoomsView = {

  $button: $('#rooms button'), // create new room
  $select: $('#rooms select'), // select from existing

  initialize: function() {
    // Click handler for add room
    // RoomsView.$button.on('rooms', RoomsView.addRoom());
  },

  // render: _.template(
  //   '<div class="rooms">' +
  //   '</div>'
  // ),

  addRoom: function() {
    //
    // POST request
    // Parse.create(newRoom);
  },

  renderRoom: function(data) {
    var realData = data.results;
    console.log(data, 'line 23');
    // loop through all messages from the data
    for (var i = 0; i < realData.length; i++) {
      // check for text property
      if (realData[i].roomname !== undefined) {
        var roomName = realData[i].roomname;
        // console.log(roomName, 'line 30')
        // MessagesView.renderMessage(message);
        var htmlRoom = '<option>' + roomName + '</option>';
        $('#rooms select').append(htmlRoom);
      }
    // $.getJSON('app.js', function(results) {
    //   console.log(results, 'line 12');
    // });
    }
  }
};
