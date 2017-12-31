$(document).ready(function() {
  var buttonSearch = $('button[type="submit"]');
  //  FUNCION QUE RECONOCE EL DISTRITO QUE DIGITE EL USUARIO Y ACTIVA EL BOTON DE BUSQUEDA
  $('input').keydown(function() {
    for (var i in distritos) {
      if ($(this).val().toUpperCase() === distritos[i]) {
        buttonSearch.attr('disabled', false);
      }
    }


    // var places = distritos; // array del archivo data.js
    // for (var i in places) {
    //   if (searchPlace === places[i]) {
    //     console.log(places[i]);
    //   } else {
    //     console.log('oh,no!');
    //  }
    //}
  });
});
