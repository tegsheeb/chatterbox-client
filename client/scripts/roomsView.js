var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  // render: _.template(
  //   '<div class="rooms">' +
  //   '</div>'
  // ),

  renderRoom: function(roomName) {
    var htmlRoom = '<div>' + roomName + '</div>';
    $('#rooms select').append(htmlRoom);
    // $.getJSON('app.js', function(results) {
    //   console.log(results, 'line 12');
    // });
  }

};
