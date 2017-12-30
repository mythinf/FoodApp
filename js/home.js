$(document).ready(function() {
  var placeInput = $('input');
  placeInput.keypress(function(){
    console.log(placeInput.val().toUpperCase());
  })
});
