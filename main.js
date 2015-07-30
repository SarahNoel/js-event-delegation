$(document).on('ready', function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var toDo = $('input').val();
    $('#all-todos').prepend('<li><h2>'+toDo+
      '&nbsp;<button class="btn btn-danger btn-sm">X</button></h2></li>');
  });

  $(document).on("click", '.btn-danger', function(){
    $(this).closest('li').remove();
  }
    );



});
