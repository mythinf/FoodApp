$(document).ready(function() {
  var placeInput = $('input');
  //  FUNCION QUE RECONOCE EL DISTRITO QUE DIGITE EL USUARIO
  placeInput.keypress(function() {
    console.log(placeInput.val().toUpperCase());
  });
});
